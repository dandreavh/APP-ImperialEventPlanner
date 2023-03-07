import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/home.component';

//RESET COMPONENT
import { ResetComponent } from './modules/reset/reset.component';

import { LoginComponent } from './modules/login/login.component';

// RACE INSCRIPTION COMPONENT
import { RaceInscriptionComponent } from './modules/race-inscription/race-inscription.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: HomeComponent },
      { path: 'reset', component: ResetComponent },
      { path: 'login', component: LoginComponent },
      { path: 'raceInscription', component: RaceInscriptionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
