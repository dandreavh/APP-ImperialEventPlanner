import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/// CARD 
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ]
})
export class MaterialModule { }