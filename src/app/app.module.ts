import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoModule } from './todo/todo.module';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderModule } from './header/header.module';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
