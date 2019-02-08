import { Injectable, Inject } from '@angular/core';
import { Observable, ReplaySubject, Observer } from 'rxjs';
import { User, Auth } from '../core.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  auth: Auth = {
    hasError: true,
    redirectUrl: '/login',
    msg: 'Not logged in',
    user: null,
  }
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(@Inject('userService') private userService) { }

  authUser(userName: string, password: string): void {
    this.userService.findUser(userName, password)
      .subscribe((userList: Array<User>) => {
        if (userList.length > 0) {
          this.auth = {
            ...this.auth,
            hasError: false,
            redirectUrl: '/',
            msg: `${userList[0].userName} Login Successfully!`,
            user: userList[0]
          };
          this.subject.next(this.auth);
        } else {
          this.auth = {
            ...this.auth,
            hasError: true,
            redirectUrl: '/',
            msg: 'User name or password incorrect.',
            user: null
          };
          this.subject.next(this.auth);
        }
      }
    );
  }

  unAuth(): void {
    this.auth = {
      ...this.auth,
      hasError: true,
      redirectUrl: '/login',
      msg: 'Logged out',
      user: null,
    };
    this.subject.next(this.auth);
  }
 
  getAuth(): Observable<Auth> {
    return this.subject.asObservable();
  }
 
}
