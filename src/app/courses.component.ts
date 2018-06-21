import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl" width="400" height="200" />
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://picsum.photos/400/200';
  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }
}
