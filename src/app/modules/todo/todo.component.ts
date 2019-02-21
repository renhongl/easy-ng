import { Component, OnInit, Inject } from '@angular/core';
import { Todo, defaultOption } from './todo.constants';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-module-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Array<Todo> = [];

  chartOption: EChartOption = {};
  updateOptions: EChartOption = {};

  constructor(@Inject('todoService') private todoService) {
  }

  ngOnInit() {
    this.loadTodoList();
    this.loadChart();
  }

  loadTodoList(): void {
    this.todoService.getAllTodo().subscribe((result) => {
      this.todoList = result;
    });
  }

  loadChart(): void {
    this.todoService.getChart().subscribe((result) => {
      this.updateOptions = {
        xAxis: {
          type: 'category',
          data: result.dateTime
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: result.finished,
          type: 'line'
        }]
      };
    });
  }

}
