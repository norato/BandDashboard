import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'setlist', loadChildren: 'app/setlist/setlist.module#SetlistModule'},
  { path: 'members', loadChildren: 'app/members/members.module#MembersModule'},
  { path: '', redirectTo: 'members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
