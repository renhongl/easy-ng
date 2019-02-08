import { Component, OnInit, Inject } from '@angular/core';
import { Auth, Link } from '../../core.model';
import { Router } from '@angular/router';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  unAuthList: Array<Link> = [
    {
      icon: 'perm_identity',
      displayName: 'Login',
      path: '/login'
    }
  ];

  authList: Array<Link> = [
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

  token: string = window.sessionStorage.getItem('ng-sdk-token');

  constructor(
    @Inject('authService') private authService, 
    @Inject('navControl') private navControl,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscribeAuth();
  }

  onClickAuth(link: Link): void {
    switch(link.displayName) {
      case 'Logout':
        return this.authService.unAuth();
      default:
        break;
    }
  }
 
  subscribeAuth(): void{
    return this.authService.getAuth().subscribe((auth: Auth)=> {
      if (!auth.hasError) {
        this.token = auth.user.id;
        window.sessionStorage.setItem('ng-sdk-token', auth.user.id);
      } else {
        this.token = '';
        window.sessionStorage.removeItem('ng-sdk-token');
      }
      // this.router.navigateByUrl(auth.redirectUrl);
    });
  }
}
