import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, todoUrl } from './todo.constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = todoUrl;

  constructor(private http: HttpClient) { }

  getAllTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoUrl);
  }

}
