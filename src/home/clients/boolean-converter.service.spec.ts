import { TestBed } from '@angular/core/testing';

import { BooleanConverterService } from './boolean-converter.service';

describe('BooleanConverterService', () => {
  let service: BooleanConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
