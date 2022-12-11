import { TestBed } from '@angular/core/testing';

import { SistemaProviderService } from './sistema-provider.service';

describe('SistemaProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistemaProviderService = TestBed.get(SistemaProviderService);
    expect(service).toBeTruthy();
  });
});
