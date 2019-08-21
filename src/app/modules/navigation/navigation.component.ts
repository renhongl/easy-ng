import { Component, OnInit, Inject } from '@angular/core';
import { Link, linkList } from './navigation.constants';
import { NavControlService } from '../../services/nav-control.service';

@Component({
  selector: 'app-module-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  favoriteNav: Array<Link> = [];
  secondaryNav: Array<Link> = [];


  constructor(private navControl: NavControlService) { }

  ngOnInit() {
    this.getNav();
  }

  getNav(): void {
    linkList.forEach(item => {
      if (item.group === 'favorite') {
        this.favoriteNav.push(item);
      }
      if (item.group === 'secondary') {
        this.secondaryNav.push(item);
      }
    });
  }

}
