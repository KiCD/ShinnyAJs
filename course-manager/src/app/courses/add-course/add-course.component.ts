import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course'
import { CoursesProviderService } from '../services/courses-provider.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Output() courseSaved:EventEmitter<Course>;
  name:string;
  description:string;
  price:number;
  discount:number;
  imageUrl:string;

  constructor(private coursesService:CoursesProviderService) {
    this.courseSaved= new EventEmitter<Course>();
   }

  ngOnInit() {
  }

  onSubmit()
  {
      console.log("submit clicked");
     /* if(!this.name || !this.description || this.price<=10 || this.discount<=0 || !this.imageUrl)
      {
        alert("invalid values");
        return;
      }*/
 
      // let newCourse = new Course( 
      //   this.name,this.description,this.imageUrl,this.price,this.discount);
      let newCourse = new Course(this.name, '', '', 10, 10);
      this.coursesService.addNewCourse(newCourse)
      .subscribe(res=>console.log("response to add: ",res),error=>alert(error));
      this.courseSaved.emit(newCourse);
      console.log("emitted");
      }

}
