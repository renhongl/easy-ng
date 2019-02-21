import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { module as SharedModule } from '../../shared';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    FilterComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    {
      provide: 'todoService',
      useClass: TodoService
    }
  ]
})
export class TodoModule { }
