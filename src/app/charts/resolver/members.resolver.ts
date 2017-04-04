import { MembersService } from './../../members/services/members.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router/src/interfaces';
import { Injectable, Provider, OnInit } from '@angular/core';

@Injectable()
export class MembersResolver implements Resolve<any> {
    constructor(private _membersService: MembersService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any> {
            return this._membersService.fetchMember(5);
    }
}
