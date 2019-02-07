import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from '../../shared/shared.module';


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
})
export class TodoModule { }
