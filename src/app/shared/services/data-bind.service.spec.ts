import { TestBed } from '@angular/core/testing';

import { DataBindService } from './data-bind.service';

describe('DataBindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBindService = TestBed.get(DataBindService);
    expect(service).toBeTruthy();
  });
});
