import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetlistComponent } from './setlist.component';
import { SetlistRoutingModule } from './setlist.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SetlistRoutingModule
  ],
  declarations: [
    SetlistComponent
  ]
})
export class SetlistModule { }
