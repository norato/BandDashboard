import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicFormComponent } from './components/music-form/music-form.component';
import { MusicListComponent } from './components/music-list/music-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    MusicFormComponent,
    MusicListComponent
  ],
  exports: [
    MusicFormComponent,
    MusicListComponent
  ]
})
export class SharedModule { }
