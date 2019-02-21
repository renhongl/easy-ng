import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, ChartData, todoUrl, chartUrl } from './todo.constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = todoUrl;
  private chartUrl = chartUrl;

  constructor(private http: HttpClient) { }

  getAllTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoUrl);
  }

  getChart(): Observable<ChartData> {
    return this.http.get<ChartData>(this.chartUrl);
  }

}
