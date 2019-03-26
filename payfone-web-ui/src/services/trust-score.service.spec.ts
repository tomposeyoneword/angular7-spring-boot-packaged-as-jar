import { TestBed } from '@angular/core/testing';

import { TrustScoreService } from './trust-score.service';

describe('TrustScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrustScoreService = TestBed.get(TrustScoreService);
    expect(service).toBeTruthy();
  });
});
