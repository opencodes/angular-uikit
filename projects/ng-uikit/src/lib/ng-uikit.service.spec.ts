import { TestBed, inject } from '@angular/core/testing';

import { NgUikitService } from './ng-uikit.service';

describe('NgUikitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgUikitService]
    });
  });

  it('should be created', inject([NgUikitService], (service: NgUikitService) => {
    expect(service).toBeTruthy();
  }));
});
