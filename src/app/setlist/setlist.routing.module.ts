import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetlistComponent } from './setlist.component';

const setlistRoutes: Routes = [
  { path: '', component: SetlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(setlistRoutes)],
  exports: [RouterModule]
})
export class SetlistRoutingModule { }
