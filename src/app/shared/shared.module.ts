import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicFormComponent } from './components/music-form/music-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MusicFormComponent
  ],
  exports: [
    MusicFormComponent
  ]
})
export class SharedModule { }
