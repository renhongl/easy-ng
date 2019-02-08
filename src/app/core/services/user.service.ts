import { Injectable } from '@angular/core';
import { User } from '../core.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  findUser(userName: string, password: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.userUrl}?userName=${userName}&password=${password}`);
  }

  findUserByName(userName: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.userUrl}?userName=${userName}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}`, user);
  }
}
