import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/user';

  login(userName: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.loginUrl}?userName=${userName}&password=${password}`);
  }

  authed(): boolean {
    return true;
  }

  handleError() {

  }

  constructor(private http: HttpClient) { }
}
