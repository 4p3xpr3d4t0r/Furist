import { TestBed } from '@angular/core/testing';

import { LawyersService } from './lawyers.service';

describe('LawyersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LawyersService = TestBed.get(LawyersService);
    expect(service).toBeTruthy();
  });
});
