import { TestBed } from '@angular/core/testing';

import { MobileDataService } from './mobile-data.service';

describe('MobileDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileDataService = TestBed.get(MobileDataService);
    expect(service).toBeTruthy();
  });
});
