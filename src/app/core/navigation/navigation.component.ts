import { Component, OnInit, Inject } from '@angular/core';
import { Link, linkList } from './navigation.constants';

@Component({
  selector: 'app-core-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  favoriteNav: Array<Link> = [];
  secondaryNav: Array<Link> = [];


  constructor(@Inject('navControl') private navControl) { }

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
