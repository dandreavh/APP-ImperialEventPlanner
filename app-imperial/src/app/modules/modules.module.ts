;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    CoreModule
  ], 
  exports: [
  ]
})
export class ModulesModule { }
