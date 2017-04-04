import { Component, OnInit } from '@angular/core';
import { Music } from './../shared/components/music-form/music';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.scss']
})
export class SetlistComponent implements OnInit {
  showMusicForm: boolean;
  showMusics: boolean;
  musics: FirebaseListObservable<Music[]>;
  music: Music;

  constructor(private af: AngularFire) {
    this.showMusics = true;
    this.showMusicForm = false;
    this.music = new Music();
    this.musics = this.af.database.list('/musics');
  }

  ngOnInit() {
  }

  ShowMusicForm() {
    this.showMusicForm = true;
    this.showMusics = false;
  }

  ShowMusics() {
    this.showMusics = true;
    this.showMusicForm = false;
  }

  editMusic(music) {
    this.music = music;
    this.ShowMusicForm();
  }

  createOrUpdateMusic(music) {
    this.musics.push(music);
  }

}
