import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ButtonComponent } from './button/button.component';
import { CardHComponent } from './card-h/card-h.component';
import { CardVerticalComponent } from '../core/card-vertical/card-vertical.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardHComponent,
    CardVerticalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ButtonComponent,
    CardHComponent,
    CardVerticalComponent
  ]
})
export class CoreModule { }
