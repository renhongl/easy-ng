import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { service as AuthGuardService } from '../../core/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }
