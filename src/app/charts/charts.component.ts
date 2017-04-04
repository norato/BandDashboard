import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Music } from './../shared/components/music-form/music';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  members: Observable<Array<any>>;

  Labels: Observable<any[]>;
  doughnutChartLabels: any[] = [];
  doughnutChartData: number[] = [];
  doughnutChartType: string = 'doughnut';
  filtered;

  constructor(private _route: ActivatedRoute) {
    this._route.data
      .subscribe(
        params => {
          this.members = params['members'].results;
          this.Labels = this.members
            .map( member => member['nat']);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.Labels.forEach(
      label => {
        if ( !this.doughnutChartLabels.includes(label)) {
          this.doughnutChartLabels.push(label);
        }
      }
    )
    this.doughnutChartLabels.forEach(
      label => {
        const count = this.members.filter(
            member => member['nat'] === label
        )
        let counter = 0;
        count.forEach(
          _counter => counter += 1
        )
        this.doughnutChartData.push(counter);
      }
    )

  }

}
