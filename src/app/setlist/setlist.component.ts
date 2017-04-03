import { Music } from './../shared/components/music-form/music';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.scss']
})
export class SetlistComponent implements OnInit {
  showMusicForm: boolean;
  showMusics: boolean;
  musics: Music[] = [
    {
      id: '1',
      name: 'foo',
      artist: 'bar',
      tone: 'F',
      label: 'FOO',
      lyrics: 'Loren Ipson'
    },
    {
      id: '2',
      name: 'foo',
      artist: 'bar',
      tone: 'F',
      label: 'FOO',
      lyrics: 'Loren Ipson'
    }
  ];

  constructor() {
    this.showMusics = true;
    this.showMusicForm = false;
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

}
