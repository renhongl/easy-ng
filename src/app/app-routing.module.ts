import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';


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
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'leaflet',
    loadChildren: './pages/leaflet-map/leaflet-map.module#LeafletMapModule'
  },
  {
    path: 'echarts',
    loadChildren: './pages/echarts/echarts.module#EchartsModule'
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
    RouterModule.forRoot(appRoutes),
    CoreModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
