import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ArtistService],
  // directives: [ROUTER_DIRECTIVES]
})

export class DetailComponent implements OnInit {
  artistId: string;
  artistToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artistService: ArtistService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
    });
    this.artistToDisplay = this.artistService.getArtistById(this.artistId);
  }

  //navigateByUrl method lets you navigate to a route by simply passing in the name of the path, which matches the path property in app.routing.ts
  goBack() {
    this._location.back();
  };


}
