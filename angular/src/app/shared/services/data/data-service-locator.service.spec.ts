import { TestBed, inject } from '@angular/core/testing';

import { DataEntityServiceLocatorService } from './data-entity-service-locator.service';

describe('DataEntityServiceLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEntityServiceLocatorService]
    });
  });

  it('should be created', inject([DataEntityServiceLocatorService], (service: DataEntityServiceLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
