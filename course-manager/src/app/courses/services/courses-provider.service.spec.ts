/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoursesProviderService } from './courses-provider.service';
import { Course } from '../../models/course';

describe('CoursesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesProviderService]
    });
  });

  it('headers are correct', inject([CoursesProviderService], (service: CoursesProviderService) => {
    //service.addNewCourse(new Course('test course','test description','',100,12)).subscribe(res=>console.log(res));
  }));
});
