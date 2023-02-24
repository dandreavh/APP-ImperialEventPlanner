import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    MaterialModule,
    ButtonComponent
  ]
})
export class CoreModule { }
