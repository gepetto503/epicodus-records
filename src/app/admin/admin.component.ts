import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //provider provides the service
  providers: [ArtistService]
})
export class AdminComponent implements OnInit {

  //makes ArtistService injectable available to any instance of AdminComponent class
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  submitForm(name: string, numberOfMembers: number, genre: string, hitSingle: string, imageUrl: string ) {
    var newArtist: Artist = new Artist(name, numberOfMembers, genre, hitSingle, imageUrl);
    this.artistService.addArtist(newArtist);
  }


}
