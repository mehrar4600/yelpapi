import { TestBed, inject } from '@angular/core/testing';

import { YelpServiceService } from './yelp-service.service';

describe('YelpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YelpServiceService]
    });
  });

  it('should be created', inject([YelpServiceService], (service: YelpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
