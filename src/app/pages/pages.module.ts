import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from '../modules/todo/todo.module';
import { HelloWorldModule } from '../modules/hello-world/hello-world.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    HelloWorldModule
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    TodoComponent
  ]
})
export class PagesModule { }
