import { Component, OnInit } from '@angular/core';
import { Course } from 'app/models/course';
import { CoursesProviderService } from 'app/courses/services/courses-provider.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string;
  showCourseList = false;
  courses:Course[];
  constructor(private coursesProvider:CoursesProviderService) { 
    coursesProvider.getCourses().then(result=>this.courses=result);
  }

  ngOnInit() {
    this.title = 'These are the available courses';
    this.showCourseList = true;
  }

  onShowCoursesRequested()
  {
    console.log("show courses request received by courses");
    this.showCourseList=true;
  }

  onAddCourseRequested()
  {
    console.log("add course request received by courses");
    this.showCourseList=false;
  }

  onCourseSaved(course:Course)
  {
    this.showCourseList = true;
    this.courses.push(course);
  }
}
