import { Observable } from 'rxjs/Rx';
import { MembersService } from './services/members.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: any[];
  constructor(private _membersService: MembersService) {
  }

  ngOnInit() {
    this._membersService.fetchMember(5)
      .subscribe(
        members => this.members = members
      );
  }

}
