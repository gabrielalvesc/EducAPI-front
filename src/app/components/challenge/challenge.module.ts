import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeViewComponent } from './challenge-view/challenge-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChallengeListComponent
  },
  {
    path: 'create',
    component: ChallengeEditComponent
  },
  {
    path: 'edit/:id',
    component: ChallengeEditComponent
  },
  {
    path: 'view/:id',
    component: ChallengeViewComponent
  }
]

@NgModule({
  declarations: [
    ChallengeListComponent,
    ChallengeEditComponent,
    ChallengeViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChallengeListComponent,
    ChallengeEditComponent,
    ChallengeViewComponent
  ]
})
export class ChallengeModule { }
