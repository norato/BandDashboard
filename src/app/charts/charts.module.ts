import { MembersResolver } from './resolver/members.resolver';
import { MembersService } from './../members/services/members.service';
import { ChartsModule } from 'ng2-charts';
import { BandChartsRoutingModule } from './charts.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    BandChartsRoutingModule,
    ChartsModule
  ],
  declarations: [
    ChartsComponent,
  ],
  providers: [
    MembersResolver,
    MembersService
  ]
})
export class BandChartsModule { }
