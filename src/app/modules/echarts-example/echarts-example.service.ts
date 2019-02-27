import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChartData, chartUrl } from './echarts-example.constants';

@Injectable({
  providedIn: 'root'
})
export class EchartsExampleService {

  private chartUrl = chartUrl;

  constructor(private http: HttpClient) { }

  getChart(): Observable<ChartData> {
    return this.http.get<ChartData>(this.chartUrl);
  }
}
