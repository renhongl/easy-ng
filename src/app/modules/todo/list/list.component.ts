import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() todoList;

  dense = false;
  interactive = true;

  constructor() { }

  ngOnInit() {
  }

}
