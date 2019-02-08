import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from './counter.actions';
import { REDUCER_NAME } from './counter.constants';


@Component({
  selector: 'module-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) { 
    this.count$ = store.pipe(select(REDUCER_NAME));
  }

  ngOnInit() {
  }

  
  increment() {
    this.store.dispatch(new Increment());
  }
 
  decrement() {
    this.store.dispatch(new Decrement());
  }
 
  reset() {
    this.store.dispatch(new Reset());
  }

}
