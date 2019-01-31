import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [TodoComponent, ListComponent, FilterComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    TodoComponent,
    ListComponent, 
    FilterComponent
  ],
})
export class TodoModule { }
