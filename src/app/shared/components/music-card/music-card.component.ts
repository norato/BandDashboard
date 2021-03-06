import { FirebaseListObservable } from 'angularfire2';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input } from '@angular/core';

import { Music } from './../music-form/music';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
  @Input() music;
  @Output() musicDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() musicEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  editEmitter(music) {
    this.musicEdit.emit(music);
  }

  deleteEmitter(music) {
    const confirmation = confirm(`Do you really want to delete ${music.label}?`);
    if (confirmation === true) {
      this.musicDelete.emit(music);
    };
  }

}
