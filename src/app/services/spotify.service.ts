import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Desde spotify service listo');
  }

  getQuery(query: string): any{
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCLFCHSBBM0osrpFAhU2Us33Z56PeZeZ2MGk3ueSllyI2EndKsvqlOUwW8vyAQ39bDJln3swJ4-vM83TkyLdlC-c8YuBe1YXPhqPA5pGeClto7fBnfXtLOlqzlnyPH_bt3PCnI961kELhAliOK6PMX_ejkCNDY'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data.albums.items ));
  }

  getArtistas(termino: string): any {
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( (data: any) => data.artists.items ));
  }
}
