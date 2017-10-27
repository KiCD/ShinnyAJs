import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'app/models/course';

const coursesListTitle = 'Courses list';
const courseDetailsTitle = 'Course details';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];
  showList: boolean;
  title: string;
  selectedCourse: Course;

  constructor() {
    
  }

  ngOnInit() {
    this.showList = true;
    this.title = coursesListTitle;
  }

  onGoToDetailsRequested(selectedCourse: Course) {
    this.showList = false;
    this.title = courseDetailsTitle;
    this.selectedCourse = selectedCourse;
  }

  onGoBackRequested() {
    console.log('courses list: go back requested');
    this.showList = true;
    this.title = coursesListTitle;
    this.selectedCourse = null;
  }
}
