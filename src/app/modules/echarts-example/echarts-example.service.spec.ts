import { TestBed } from '@angular/core/testing';

import { EchartsExampleService } from './echarts-example.service';

describe('EchartsExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EchartsExampleService = TestBed.get(EchartsExampleService);
    expect(service).toBeTruthy();
  });
});
