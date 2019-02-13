import { Component, OnInit, Inject } from '@angular/core';
import { Auth } from '../../shared/shared.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = 'feng';
  password: string = '112233';

  constructor(
    @Inject('authService') private authService,
    private route: Router
  ) { }

  ngOnInit() {
    this.subscribeAuth();
  }

  login() {
    this.authService.authUser(this.userName, this.password);
  }

  subscribeAuth(): void {
    return this.authService.getAuth().subscribe((auth: Auth) => {
      if (!auth.hasError) {
        this.gotAuth(auth);
      } else {
        this.gotUnauth(auth);
      }
    });
  }

  loginError(error: HttpErrorResponse) {
    alert(error);
  }

  gotUnauth(auth: Auth) {
    window.sessionStorage.removeItem('ng-sdk-token');
    this.route.navigateByUrl(auth.redirectUrl);
  }

  gotAuth(auth: Auth) {
    window.sessionStorage.setItem('ng-sdk-token', auth.user.id);
    this.route.navigateByUrl(auth.redirectUrl);
  }
}
