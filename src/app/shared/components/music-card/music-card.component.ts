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
  @Input() music: Music;
  @Output() musicDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() musicEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  editEmitter(music) {
    this.musicEdit.emit(music);
  }

  deleteEmitter(id) {
    const confirmation = confirm(`Do you really want to delete story #${id}?`);
    if (confirmation === true) {
      this.musicDelete.emit(id);
    };
  }

}
