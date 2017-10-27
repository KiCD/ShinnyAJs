import { Injectable } from '@angular/core';
import { Course } from '../../models/course'
import { Http } from '@angular/http';

@Injectable()
export class CoursesProviderService {
  private coursesSourceUrl='../../api/courses.json';
  constructor(private http:Http) { }
  
  getCourses():Promise<Course[]>{
    console.log("get courses requested");
   return this.http.get(this.coursesSourceUrl).toPromise().then(response=>
    response.json());
  }
}
