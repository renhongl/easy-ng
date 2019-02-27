import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsExampleComponent } from './echarts-example.component';

describe('EchartsExampleComponent', () => {
  let component: EchartsExampleComponent;
  let fixture: ComponentFixture<EchartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
