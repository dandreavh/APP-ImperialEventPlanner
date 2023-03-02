import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/// CARD 
import {MatCardModule} from '@angular/material/card';
/// LINEA DIVISORA
import {MatDividerModule} from '@angular/material/divider';
//

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }