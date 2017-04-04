import { Music } from './music';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.scss']
})
export class MusicFormComponent implements OnInit {

  musicForm: FormGroup;
  @Input() music;
  @Output() createOrUpdateMusic: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  submitForm(value) {
    const music = Object.assign(this.music, value);
    this.createOrUpdateMusic.emit(music);
    this.music = new Music();
    this.initForm();
  }

  initForm() {
    this.musicForm = new FormGroup({
      artist: new FormControl(this.music.artist, Validators.required),
      name: new FormControl(this.music.name, Validators.required),
      tone: new FormControl(this.music.tone, Validators.required),
      lyrics: new FormControl(this.music.lyrics, Validators.required),
      label: new FormControl(this.music.label, Validators.required),
    });
  }

}
