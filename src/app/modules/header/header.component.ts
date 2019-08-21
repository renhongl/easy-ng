import { Component, OnInit, Inject } from '@angular/core';
import { Auth, Link } from '../../shared/global.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavControlService } from '../../services/nav-control.service';

@Component({
  selector: 'app-module-header',
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
    private authService: AuthService,
    private navControl: NavControlService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribeAuth();
  }

  onClickAuth(link: Link): void {
    switch (link.displayName) {
      case 'Logout':
        return this.authService.unAuth();
      default:
        break;
    }
  }

  subscribeAuth(): void {
    this.authService.getAuth().subscribe((auth: Auth) => {
      if (!auth.hasError) {
        this.token = auth.user.id;
        window.sessionStorage.setItem('ng-sdk-token', auth.user.id);
      } else {
        this.token = '';
        window.sessionStorage.removeItem('ng-sdk-token');
      }
      this.router.navigateByUrl(auth.redirectUrl);
    });
  }
}
