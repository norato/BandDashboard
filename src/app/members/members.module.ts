import { MembersRoutingModule } from './members.routing.module';
import { MembersService } from './services/members.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  declarations: [
    MembersComponent
  ],
  providers: [
    MembersService
  ]
})
export class MembersModule { }
