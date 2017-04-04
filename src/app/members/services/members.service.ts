import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://randomuser.me/api/?results=';
  }

  fetchMember(times): Observable<any> {
    return this.http.get(`${this.baseUrl}${times}`)
        .map(response => response.json());
  }

}
