import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'todo',
    loadChildren: './pages/todo/todo.module#TodoModule'
  },
  {
    path: '**',
    loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })//for debugging
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
