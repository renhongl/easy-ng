import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsExampleComponent } from './echarts-example.component';
import { EchartsExampleService } from '../../services/echarts-example.service';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [EchartsExampleComponent],
  imports: [
    CommonModule,
    UiModule
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
