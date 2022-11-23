import { TestBed } from '@angular/core/testing';

import { DesignDependancyService } from './design-dependancy.service';

describe('DesignDependancyService', () => {
  let service: DesignDependancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignDependancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
