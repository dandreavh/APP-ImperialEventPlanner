
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "../core/material/material.module";
import { CoreModule } from "../core/core.module";
import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';
import { RaceInscriptionComponent } from './race-inscription/race-inscription.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    ResetComponent,
    LoginComponent,
    RaceInscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    ResetComponent
  ]
})
export class ModulesModule { }
