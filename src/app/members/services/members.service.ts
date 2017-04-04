import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://randomuser.me/api/';
  }

  fetchMember(times): Observable<any> {
    const members = [];
    for ( let i = 0; i < times; i++) {
      this.http.get(`${this.baseUrl}`)
          .map(response => response.json())
          .subscribe(
            member => members.push(member)
          );
    }
    return Observable.of(members);
  }

}
