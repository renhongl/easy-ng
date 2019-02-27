import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker } from 'leaflet';

@Component({
  selector: 'app-module-leaflet-example',
  templateUrl: './leaflet-example.component.html',
  styleUrls: ['./leaflet-example.component.scss']
})
export class LeafletExampleComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 18,
    center: latLng(1.32949, 103.85584)
  };

  layersControl = {
    baseLayers: {
      'One Map': tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Circle Example': circle([1.32949, 103.85584], { radius: 5000 }),
      'Marker Example': marker([1.32949, 103.85584])
    }
  };


  constructor() { }

  ngOnInit() {
  }



}
