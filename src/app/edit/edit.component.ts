import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ArtistService]
})


export class EditComponent implements OnInit {
  @Input() selectedArtist;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  beginUpdatingArtist(artistToUpdate){
    this.artistService.updateArtist(artistToUpdate);
  }

  beginDeletingArtist(artistToDelete){
    if(confirm("Are you sure you want to delete this mufucka from the roster?")){
      this.artistService.deleteArtist(artistToDelete);
    }
  }
}
