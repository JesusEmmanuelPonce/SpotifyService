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

  getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAdv8YHj3AxPaQez75tYcV8zZDARM155W92S9Tn0avk-Xi2h_7120vJbuTjj38xEtRBBPoTuqFTdBOKXfs'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( (data: any) => data.albums.items ));
  }

  getArtistas(termino: string): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAdv8YHj3AxPaQez75tYcV8zZDARM155W92S9Tn0avk-Xi2h_7120vJbuTjj38xEtRBBPoTuqFTdBOKXfs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
      .pipe( map( (data: any) => data.artists.items ));
  }
}
