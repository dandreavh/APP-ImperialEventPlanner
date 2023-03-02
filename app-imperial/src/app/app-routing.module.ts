import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//HOME COMPONENT
import { HomeComponent } from './modules/home/home.component';
//RESET COMPONENT
import { ResetComponent } from './modules/reset/reset.component';

const routes: Routes = [
  {
    path: '',
    // component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: HomeComponent  },
      { path: 'reset', component: ResetComponent  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
