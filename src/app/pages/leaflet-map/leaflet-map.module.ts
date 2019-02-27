import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapComponent } from './leaflet-map.component';
import { module as LeafletExampleModule } from '../../modules/leaflet-example';
import { LeafletMapRoutingModule } from './leaflet-map-routing.module';

@NgModule({
  declarations: [LeafletMapComponent],
  imports: [
    CommonModule,
    LeafletExampleModule,
    LeafletMapRoutingModule
  ]
})
export class LeafletMapModule { }
