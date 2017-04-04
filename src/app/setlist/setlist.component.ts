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
    this.showMusics = false;
    this.showMusicForm = true;
    this.music = new Music();
    this.musics = this.af.database.list('/musics');
  }

  ngOnInit() {
  }

  ShowMusicForm() {
    this.showMusicForm = false;
    this.showMusics = true;
  }

  ShowMusics() {
    this.showMusics = false;
    this.showMusicForm = true;
  }

  editMusic(music) {
    this.music = music;
    this.ShowMusicForm();
  }

  createOrUpdateMusic(music) {
    if (music.$key) {
      this.musics.update(music.$key, music);
    } else {
      this.musics.push(music);
    }
  }

  deleteMusic(music) {
    this.musics.remove(music.$key);
  }

}
