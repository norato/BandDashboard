import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetlistComponent } from './setlist.component';
import { SetlistRoutingModule } from './setlist.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SetlistRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    SetlistComponent
  ]
})
export class SetlistModule { }
