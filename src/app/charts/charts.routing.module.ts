import { MembersResolver } from './resolver/members.resolver';
import { ChartsComponent } from './charts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const chartsRoutes: Routes = [
  { path: '', component: ChartsComponent, resolve: { members: MembersResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(chartsRoutes)],
  exports: [RouterModule]
})
export class BandChartsRoutingModule { }
