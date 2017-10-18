import { TestBed, inject } from '@angular/core/testing';

import { GeneratorService } from './generator.service';

describe('GeneratorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratorService]
    });
  });

  it('should be created', inject([GeneratorService], (service: GeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
