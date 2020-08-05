import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Desde spotify service listo');
  }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDqrzU_E_YfE5Fx1O348iHPRH9QNZmDKUcrOLR2EIKcNUItsmnEK_tiRDgP0mvbVIhYfuYHErkc51DWNpQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
