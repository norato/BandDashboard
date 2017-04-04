import { ChartsComponent } from './charts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const chartsRoutes: Routes = [
  { path: '', component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(chartsRoutes)],
  exports: [RouterModule]
})
export class BandChartsRoutingModule { }
