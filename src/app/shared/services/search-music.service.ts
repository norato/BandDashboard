import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchMusicService {

  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://api.vagalume.com.br/search.php';
  }

  fetchMusic(music): Observable<any>{
      return this.http.get(`${this.baseUrl}?art="${music.artist}"&mus="${music.name}&apikey={key}"`)
                  .map(response => response.json());
  }


}
