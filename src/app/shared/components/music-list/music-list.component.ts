import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input } from '@angular/core';

import { Music } from './../music-form/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  hasNoMusic: boolean;
  @Input() musics: Music[];
  @Output() musicDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() musicEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
}
