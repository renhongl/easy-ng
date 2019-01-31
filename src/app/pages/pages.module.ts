import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, TodoComponent],
  imports: [
    CommonModule,
    TodoModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
