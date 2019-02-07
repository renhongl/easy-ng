import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'core-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  

  constructor(@Inject('navControl') private navControl) { }

  ngOnInit() {
  }

}
