import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseItemComponent } from './courses/courses-list/course-item/course-item.component';
import { CourseDetailsComponent } from './courses/courses-list/course-details/course-details.component';
import { AddBorderForDiscountDirective } from './courses/courses-list/add-border-for-discount.directive';
import { ApplyDiscountPipe } from './courses/courses-list/apply-discount.pipe';
import { FilterCoursesPipe } from './courses/courses-list/filter-courses.pipe';
import { CoursesProviderService } from 'app/courses/services/courses-provider.service';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    AddBorderForDiscountDirective,
    ApplyDiscountPipe,
    FilterCoursesPipe,
    NavigationBarComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
