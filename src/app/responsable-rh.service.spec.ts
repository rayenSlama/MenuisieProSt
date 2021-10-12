import { TestBed } from '@angular/core/testing';

import { ResponsableRHService } from './responsable-rh.service';

describe('ResponsableRHService', () => {
  let service: ResponsableRHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableRHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
