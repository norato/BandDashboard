import { MembersComponent } from './members.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const membersRoutes: Routes = [
  { path: '', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(membersRoutes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
