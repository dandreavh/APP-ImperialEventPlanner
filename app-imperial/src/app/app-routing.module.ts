import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/home.component';

//HOME COMPONENT
import { HomeComponent } from './modules/home/home.component';
//RESET COMPONENT
import { ResetComponent } from './modules/reset/reset.component';

import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: HomeComponent  },
      { path: 'reset', component: ResetComponent  },
      { path: 'register', component: RegistrationComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
