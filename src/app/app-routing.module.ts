import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'contexts',
        loadChildren: () => import('src/app/components/context/context.module').then(m => m.ContextModule)
      },
      {
        path: 'challenges',
        loadChildren: () => import('src/app/components/challenge/challenge.module').then(m => m.ChallengeModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
