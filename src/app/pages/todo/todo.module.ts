import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoModule as Todo } from '../../modules/todo/todo.module';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    Todo
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
