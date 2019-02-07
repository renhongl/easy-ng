import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoModule as Todo } from '../../modules/todo/todo.module';
import { SharedModule } from '../../shared/shared.module';


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
