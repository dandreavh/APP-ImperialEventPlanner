import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CardHComponent } from './card-h/card-h.component';

@NgModule({
  declarations: [
    CardHComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CardHComponent
  ]
})
export class CoreModule { }
