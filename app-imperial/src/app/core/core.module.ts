import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { CardVerticalComponent } from '../core/card-vertical/card-vertical.component';

@NgModule({
  declarations: [
    CardVerticalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    MaterialModule,
    CardVerticalComponent
  ]
})
export class CoreModule { }
