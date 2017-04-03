import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicFormComponent } from './components/music-form/music-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MusicFormComponent
  ],
  exports: [
    MusicFormComponent
  ]
})
export class SharedModule { }
