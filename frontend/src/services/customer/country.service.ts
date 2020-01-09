import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: any;

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: ''
    })
  }

  populateFormGroup(country) {
    console.log(country);
    this.form.setValue(country);
  }

  getAllCountries() {
    this.countries = [
      {
        id: 1,
        name: 'Belgium'
      },
      {
        id: 2,
        name: 'France'
      }
    ];
    return this.countries;
  }
}
