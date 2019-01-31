import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() drawer: boolean;

  constructor() { }

  ngOnInit() {
  }

}
