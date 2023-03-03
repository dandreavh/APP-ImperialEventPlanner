import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTreeModule,
  ],
  exports: [
    MatIconModule,
    MatTreeModule,
  ]
})
export class MaterialModule { }