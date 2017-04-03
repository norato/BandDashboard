import { Music } from './../music-form/music';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  hasNoMusic: boolean;
  @Input() musics: Music[];

  constructor() {
  }

  ngOnInit() {
  }

}
