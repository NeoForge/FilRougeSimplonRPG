import { TestBed } from '@angular/core/testing';

import { PNJService } from './pnj.service';

describe('PNJService', () => {
  let service: PNJService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PNJService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
