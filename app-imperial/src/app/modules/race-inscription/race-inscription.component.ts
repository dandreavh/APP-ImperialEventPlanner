import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from "./person.model";

@Component({
  selector: 'app-race-inscription',
  templateUrl: './race-inscription.component.html',
  styleUrls: ['./race-inscription.component.scss']
})
export class RaceInscriptionComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dniFormControl = new FormControl('', [Validators.required, Validators.pattern(/\d{8}[A-Z]/)]);

  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  model = new Person(1, '', '', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newPerson() {
    this.model = new Person(2, '', '', '', '', '', '', '', '');
  }
}
