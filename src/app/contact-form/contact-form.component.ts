import { Component } from '@angular/core';

interface IContactMethod {
  id: number,
  name: string
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods: IContactMethod[] = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
  }

}
