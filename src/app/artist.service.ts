import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//injectable is the stuff we want to be able to use in many different components
@Injectable()
export class ArtistService {

  //sets up a var with the right type to hold our artists data from firebase
  artists: FirebaseListObservable<any[]>;

  //when this class is instantiated, it comes with our Firebase database and it sets the artists var to the list of artists from firebase
  constructor(private database: AngularFireDatabase) {
    this.artists = database.list('artists');
  }

  //this is a method we can call whenever we want access to the artists list from firebase
  getArtists() {
    return this.artists;
  }

  //this method pushes a new artist object to the database
  addArtist(newArtist: Artist) {
    this.artists.push(newArtist);
  }

  getArtistById(artistId: string){
    return this.database.object('/artists/' + artistId);
  }

  updateArtist(localUpdatedArtist){
    var artistEntryInFirebase = this.getArtistById(localUpdatedArtist.$key);
    artistEntryInFirebase.update({
      name: localUpdatedArtist.name,
      numberOfMembers: localUpdatedArtist.numberOfMembers,
      genre: localUpdatedArtist.genre,
      hitSingle: localUpdatedArtist.hitSingle,
      imageUrl: localUpdatedArtist.imageUrl
    });
  }

  deleteArtist(localArtistToDelete){
    var artistEntryInFirebase = this.getArtistById(localArtistToDelete.$key);
    artistEntryInFirebase.remove();
  }

}
