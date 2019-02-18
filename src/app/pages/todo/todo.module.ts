import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { module as Todo } from '../../modules/todo';
import { module as SharedModule } from '../../shared';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    SharedModule,
    TodoRoutingModule,
    Todo
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
