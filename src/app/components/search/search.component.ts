import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string): void {
    this.spotify.getArtistas( termino )
      .subscribe((data: any) => {
        this.artistas = data;
      });
  }

}
