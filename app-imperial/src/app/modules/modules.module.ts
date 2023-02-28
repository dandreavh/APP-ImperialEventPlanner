import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "../core/material/material.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule
  ],
  exports: [

  ]
})
export class ModulesModule { }
