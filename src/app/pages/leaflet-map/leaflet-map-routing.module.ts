import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletMapComponent } from './leaflet-map.component';

const routes: Routes = [
  {
    path: '',
    component: LeafletMapComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LeafletMapRoutingModule { }
