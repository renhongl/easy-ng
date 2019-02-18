import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, ChartData } from './todo.constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'http://localhost:3000/todo';
  private chartUrl = 'http://localhost:3000/chart';

  constructor(private http: HttpClient) { }

  getAllTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoUrl);
  }

  getChart(): Observable<ChartData> {
    return this.http.get<ChartData>(this.chartUrl);
  }

}
