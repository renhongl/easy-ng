import { TestBed } from '@angular/core/testing';

import { NavControlService } from './nav-control.service';

describe('NavControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavControlService = TestBed.get(NavControlService);
    expect(service).toBeTruthy();
  });
});
