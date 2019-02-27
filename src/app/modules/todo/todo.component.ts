import { Component, OnInit, Inject } from '@angular/core';
import { Todo } from './todo.constants';


@Component({
  selector: 'app-module-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Array<Todo> = [];

  constructor(@Inject('todoService') private todoService) {
  }

  ngOnInit() {
    this.loadTodoList();
  }

  loadTodoList(): void {
    this.todoService.getAllTodo().subscribe((result) => {
      this.todoList = result;
    });
  }

}
