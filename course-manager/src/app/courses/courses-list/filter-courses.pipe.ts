import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/models/course';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(value: Course[], filterValue: string): Course[] {
    console.log("filter course list.",filterValue);
    if(!filterValue)
    {
      return value;
    }
    let searchString = filterValue.toLowerCase();
    return value.filter(courseItem=>(courseItem.name && courseItem.name.toLowerCase().includes(searchString)) 
    || (courseItem.description &&courseItem.description.toLowerCase().includes(searchString)));
  }

}
