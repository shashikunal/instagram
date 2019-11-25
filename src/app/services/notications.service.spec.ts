import { TestBed } from '@angular/core/testing';

import { NoticationsService } from './notications.service';

describe('NoticationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticationsService = TestBed.get(NoticationsService);
    expect(service).toBeTruthy();
  });
});
