import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course'

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

  constructor() {
    this.courseSaved= new EventEmitter<Course>();
   }

  ngOnInit() {
  }

  onSubmit()
  {
    //put validation here
      console.log("submit clicked");
      let newCourse = new Course( 
        "course"+Math.random(),
        this.name,this.description,this.imageUrl,this.price,this.discount);
        this.courseSaved.emit(newCourse);
        console.log("emitted");
  }

}
