import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Output() addCourseRequested: EventEmitter<any>;
  @Output() showCoursesRequested: EventEmitter<any>;
  constructor() { 
    this.addCourseRequested = new EventEmitter<any>();
    this.showCoursesRequested = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  showCourses(){
    console.log("show courses clicked");
    this.showCoursesRequested.emit();
  }

  addCourse()
  {
    console.log("add course clicked");
    this.addCourseRequested.emit();

  }

}
