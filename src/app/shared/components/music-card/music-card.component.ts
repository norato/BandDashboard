import { Input } from '@angular/core';
import { Music } from './../music-form/music';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
  @Input() music: Music;

  constructor() { }

  ngOnInit() {
  }

}
