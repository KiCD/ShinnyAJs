import { Injectable } from '@angular/core';
import { Course } from '../../models/course'
import { Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CoursesProviderService {
  private coursesSourceUrl='https://course-manager-demo.herokuapp.com/api/courses';
  private courseGetUrl =  'https://course-manager-demo.herokuapp.com/api/course';

  private headers=new Headers({'Content-Type':'application/json' });
  private requestOptions = new RequestOptions({headers:this.headers});

  constructor(private http:Http) { }
  
  getCourses():Observable<Course[]>{
    console.log("get courses requested");
   return this.http.get(this.coursesSourceUrl).map(res => res.json())
   .catch((error:any) => 
      Observable.throw(error.json().error || 'Server error'));
  }

  getCourse(id:string):Observable<Course>
  {
    console.log("get course called",id);
    return this.http.get(`${this.courseGetUrl}/${id}`).map(res => res.json())
    .catch((error:any) => 
       Observable.throw(error.json().error || 'Server error'));
  }

  addNewCourse(courseToAdd:Course):Observable<Course>
  {
    console.log("add course called",courseToAdd);
    return this.http.post(this.courseGetUrl,JSON.stringify(courseToAdd),this.requestOptions).map(res => res.json())
    .catch((error:any) => 
       Observable.throw(error.json().error || 'Server error'));

  }

  updateCourse(courseToUpdate:Course)
  {

  }

  deleteCourse(courseTodelete)
  {

  }
}
