import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { EchartsExampleService } from '../../services/echarts-example.service';

@Component({
  selector: 'app-module-echarts-example',
  templateUrl: './echarts-example.component.html',
  styleUrls: ['./echarts-example.component.scss']
})
export class EchartsExampleComponent implements OnInit {

  chartOption: EChartOption = {};
  updateOptions: EChartOption = {};

  constructor(private echartsExampleService: EchartsExampleService) { }

  ngOnInit() {
    this.loadChart();

  }

  loadChart(): void {
    this.echartsExampleService.getChart().subscribe((result) => {
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
