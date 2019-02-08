import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { REDUCER_NAME } from './counter.constants';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ [REDUCER_NAME]: counterReducer })
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
