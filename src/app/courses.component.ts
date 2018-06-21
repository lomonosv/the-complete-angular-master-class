import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl" width="400" height="200" />
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <button class="btn btn-primary">Save</button>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://picsum.photos/400/200';
  colSpan = 2;
  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }
}
