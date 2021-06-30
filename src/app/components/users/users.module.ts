import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: UserEditComponent
  }
]

@NgModule({
  declarations: [
    UserEditComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class UsersModule { }
