import { RouterModule } from '@angular/router';
import { SearchMusicService } from './services/search-music.service';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicFormComponent } from './components/music-form/music-form.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Angular2FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    MusicFormComponent,
    MusicListComponent,
    MusicCardComponent,
    NavBarComponent
  ],
  exports: [
    MusicFormComponent,
    MusicListComponent,
    NavBarComponent
  ],
  providers: [
    SearchMusicService
  ]
})
export class SharedModule { }
