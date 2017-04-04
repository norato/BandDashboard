import { BandChartsRoutingModule } from './charts.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    BandChartsRoutingModule,
  ],
  declarations: [ChartsComponent]
})
export class BandChartsModule { }
