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
    console.log(`Buscando... ${termino}`);
    this.spotify.getArtistas( termino )
    .subscribe((data: any) => {
      console.log(data.artists.items);
      this.artistas = data.artists.items;
    });
  }

}
