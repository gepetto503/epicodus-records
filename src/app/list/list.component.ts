import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ArtistService]
})

export class ListComponent implements OnInit {
  //sets up a variable ready to receive an object from firebase,
  //ultimately fed to it by the getArtists method in the ArtistService injectable
  artists: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  //this constructor has two... properties? router and artistService.  router is an instance of the router, so this component has access to a router and knows what it means.  artistService is an instance of the ArtistService class from that service, so this component has access to stuff in there, too.
  constructor(private router: Router, private artistService: ArtistService){}

  //whenever an object of this class is initialized...
  ngOnInit(){
    //set the artists property, which is a FirebaseListObservable file type...
    //artistService is injected from the service, so we have access to its getArtists method, which just return an artist object from firebase.
    this.artists = this.artistService.getArtists();
  }

  //has router capabilities from router variable in constructor,
  //artist is being fed in from html, it refers to an index of the artists array which is a FirebaseListObservable type that is fed data by ArtistService, which gets it from database.list('artists').
  //so this looks in the artists array(/folder?) in the database for an object that matches the key of the clicked object, which came from the database in the first place as described above.
  goToDetailPage(clickedArtist) {
    this.router.navigate(['detail', clickedArtist.$key]);
  }



}
