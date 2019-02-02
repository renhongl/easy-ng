import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('core') private coreService) { }

  ngOnInit() {
  }

}
