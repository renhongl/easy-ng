import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from '../../shared/shared.module';
import { REDUCER_NAME } from './todo.constants';
import { todoReducer } from './todo.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    FilterComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forRoot({[REDUCER_NAME]: todoReducer})
  ],
  exports: [
    TodoComponent
  ],
})
export class TodoModule { }
