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
    <div (click)="onDivClicked()">
      <button
          class="btn btn-primary"
          [class.active]="isActive"
          [style.backgroundColor]="isActive ? 'blue' : 'white'"
          [style.color]="isActive ? 'white' : 'black'"
          (click)="onSave($event)"
      >Save</button>
    </div>
    <input type="text" (keyup.enter)="onKeyUp()" [(ngModel)]="email" />
    <hr/>
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.2-2' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }}
    <hr/>
    {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://picsum.photos/400/200';
  colSpan = 2;
  courses: string[];
  isActive = false;
  email = 'me@example.com';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  onSave($event) {
    $event.stopPropagation();
    console.log($event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp() {
    console.log(this.email);
  }
}
