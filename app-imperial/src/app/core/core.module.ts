import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

//card
import { CardVerticalComponent } from '../core/card-vertical/card-vertical.component';
//linea divisora
import { LineaDivisorRojoComponent } from './linea-divisor-rojo/linea-divisor-rojo.component';
//carousel
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    CardVerticalComponent,
    LineaDivisorRojoComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    MaterialModule,
    CardVerticalComponent,
    LineaDivisorRojoComponent,
    CarouselComponent
  ]
})
export class CoreModule { }
