import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'app/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() goToDetailsRequested: EventEmitter<Course>;
  borderColor:string="red";
  constructor() {
    this.goToDetailsRequested = new EventEmitter<Course>();
  }

  ngOnInit() {
  }

  goToDetails() {
    console.log('go to details clicked on course: ', this.course.name);
    this.goToDetailsRequested.emit(this.course);
  }

}
