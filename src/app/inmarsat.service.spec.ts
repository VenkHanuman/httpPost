import { TestBed } from '@angular/core/testing';

import { InmarsatService } from './inmarsat.service';

describe('InmarsatService', () => {
  let service: InmarsatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmarsatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
