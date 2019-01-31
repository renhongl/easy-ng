import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  type = 'default';
  prominent = false;
  dense = false;

  @Input() toggleDrawer: any;

  constructor() { }

  ngOnInit() {
  }

}
