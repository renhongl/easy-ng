import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  unAuthList: Array<object> = [
    {
      icon: 'perm_identity',
      displayName: 'Login',
      path: '/login'
    }
  ];

  authList: Array<object> = [
    {
      icon: 'how_to_reg',
      displayName: 'Profile',
      path: '/login'
    },
    {
      icon: 'settings',
      displayName: 'Settings',
      path: '/login'
    },
    {
      icon: 'power_settings_new',
      displayName: 'Logout',
      path: '/login'
    }
  ];

  token = window.sessionStorage.getItem('ng-sdk-token');

  constructor(@Inject('navControl') private navControl, @Inject('authService') private authService) { }

  ngOnInit() {
  }

}
