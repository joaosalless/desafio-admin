import { TestBed, inject } from '@angular/core/testing';

import { DataServiceLocatorService } from './data-service-locator.service';

describe('DataServiceLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServiceLocatorService]
    });
  });

  it('should be created', inject([DataServiceLocatorService], (service: DataServiceLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
