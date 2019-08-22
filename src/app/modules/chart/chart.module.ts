import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    ChartComponent
  ]
})
export class EchartsExampleModule { }
