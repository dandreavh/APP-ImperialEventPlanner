import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from "./person.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dniFormControl = new FormControl('', [Validators.required, Validators.pattern(/\d{8}[A-Z]/)]);

  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  model = new Person(1, '', '', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // console.log(this.dniFormControl.errors);
  }

  newPerson() {
    this.model = new Person(2, '', '', '', '', '', '', '', '');
  }
}
