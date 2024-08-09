import { TestBed } from '@angular/core/testing';

import { InversionServiceService } from './inversion-service.service';

describe('InversionServiceService', () => {
  let service: InversionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InversionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
