import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token: string = window.sessionStorage.getItem('ng-sdk-token');
    if (token) {
      this.router.navigateByUrl(state.url);
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
