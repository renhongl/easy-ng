import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsComponent } from './echarts.component';
import { EchartsRoutingModule } from './echarts-routing.module';
import { module as EchartsExampleModule } from '../../modules/echarts-example';

@NgModule({
  declarations: [EchartsComponent],
  imports: [
    CommonModule,
    EchartsRoutingModule,
    EchartsExampleModule
  ]
})
export class EchartsModule { }
