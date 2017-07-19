import { TestBed, inject } from '@angular/core/testing';

import { SearchableEntityFilterService } from './searchable-entity-filter.service';

describe('SearchableEntityFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchableEntityFilterService]
    });
  });

  it('should be created', inject([SearchableEntityFilterService], (service: SearchableEntityFilterService) => {
    expect(service).toBeTruthy();
  }));
});
