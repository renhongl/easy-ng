import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletExampleComponent } from './leaflet-example.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [LeafletExampleComponent],
  imports: [
    CommonModule,
    LeafletModule
  ],
  exports: [LeafletExampleComponent]
})
export class LeafletExampleModule { }
