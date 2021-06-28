import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextListComponent } from './context-list/context-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContextEditComponent } from './context-edit/context-edit.component';
import { ContextViewComponent } from './context-view/context-view.component';

const routes: Routes = [
  {
    path: '',
    component: ContextListComponent
  },
  {
    path: 'create',
    component: ContextEditComponent
  },
  {
    path: 'edit/:id',
    component: ContextEditComponent
  },
  {
    path: 'view/:id',
    component: ContextViewComponent
  }
]

@NgModule({
  declarations: [
    ContextListComponent,
    ContextEditComponent,
    ContextViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ContextListComponent,
    ContextEditComponent,
    ContextViewComponent
  ]
})
export class ContextModule { }
