import { Component, OnInit, Inject } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-module-echarts-example',
  templateUrl: './echarts-example.component.html',
  styleUrls: ['./echarts-example.component.scss']
})
export class EchartsExampleComponent implements OnInit {

  chartOption: EChartOption = {};
  updateOptions: EChartOption = {};

  constructor(@Inject('echartsExampleService') private echartsExampleService) { }

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
