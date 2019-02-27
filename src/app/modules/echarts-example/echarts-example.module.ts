import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsExampleComponent } from './echarts-example.component';
import { EchartsExampleService } from './echarts-example.service';
import { module as SharedModule } from '../../shared';

@NgModule({
  declarations: [EchartsExampleComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EchartsExampleComponent
  ],
  providers: [
    {
      provide: 'echartsExampleService',
      useClass: EchartsExampleService
    }
  ]
})
export class EchartsExampleModule { }
