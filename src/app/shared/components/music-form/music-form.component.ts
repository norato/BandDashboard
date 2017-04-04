import { SearchMusicService } from '../../services/search-music.service';
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

  constructor(private _searchMusic: SearchMusicService) {
  }

  ngOnInit() {
    this.initForm(this.music);
  }

  submitForm(value) {
    const music = Object.assign(this.music, value);
    this.createOrUpdateMusic.emit(music);
    this.music = new Music();
    this.initForm(this.music);
  }

  searchMusic(value) {
    this._searchMusic.fetchMusic(value)
      .subscribe(
        success => {
          value.lyrics = success.mus[0].text;
          this.initForm(value)
        },
        error => console.log(error)
      );
  }

  initForm(_music) {
    this.musicForm = new FormGroup({
      artist: new FormControl(_music.artist, Validators.required),
      name: new FormControl(_music.name, Validators.required),
      tone: new FormControl(_music.tone, Validators.required),
      lyrics: new FormControl(_music.lyrics, Validators.required),
      label: new FormControl(_music.label, Validators.required),
    });
  }

}
