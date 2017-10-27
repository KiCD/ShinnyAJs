/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoursesProviderService } from './courses-provider.service';

describe('CoursesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesProviderService]
    });
  });

  it('should ...', inject([CoursesProviderService], (service: CoursesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
