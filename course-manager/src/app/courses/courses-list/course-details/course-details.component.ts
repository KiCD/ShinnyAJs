import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Course } from 'app/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course: Course;
  @Output() goBackRequested: EventEmitter<any>;
  constructor() {
    this.goBackRequested = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  goBack() {
    console.log('go back requested');
    this.goBackRequested.emit();
  }

}
