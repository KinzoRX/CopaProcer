import { TestBed } from '@angular/core/testing';

import { ServidorProviderService } from './servidor-provider.service';

describe('ServidorProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServidorProviderService = TestBed.get(ServidorProviderService);
    expect(service).toBeTruthy();
  });
});
