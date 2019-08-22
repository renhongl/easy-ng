import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedNavComponent } from './selected-nav.component';

describe('SelectedNavComponent', () => {
  let component: SelectedNavComponent;
  let fixture: ComponentFixture<SelectedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
