import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-module-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chartOption: EChartOption = {};
  updateOptions: EChartOption = {};

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.loadChart();

  }

  loadChart(): void {
    this.chartService.getChart().subscribe((result) => {
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
