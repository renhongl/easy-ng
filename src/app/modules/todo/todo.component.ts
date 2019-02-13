import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { REDUCER_NAME, Todo } from './todo.constants';

@Component({
  selector: 'app-module-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  state: Observable<Todo>;

  constructor(private store: Store<Todo>) {
    this.state = store.pipe(select(REDUCER_NAME));
  }

  ngOnInit() {
  }

}
