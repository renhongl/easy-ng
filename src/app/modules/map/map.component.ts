import { Component, OnInit } from '@angular/core';

declare const AMap: any;

@Component({
  selector: 'app-module-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    let map = new AMap.Map('map', {
      zoom: 16,
      center: [104.061099, 30.582964],
      viewMode: '3D'
    });
    let infoWindow = new AMap.InfoWindow({
      isCustom: true,  
      content: '<div>信息窗体</div>', 
      offset: new AMap.Pixel(16, -45)
    });

    let onMarkerClick = function (e) {
      infoWindow.open(map, e.target.getPosition());
    };

    let marker = new AMap.Marker({
      position: [104.063797, 30.583084]
    });

    let bounds = [[104.061099, 30.582964], [104.061874, 30.583366]];

    map.add(marker);
    marker.on('click', onMarkerClick);
  }

}
