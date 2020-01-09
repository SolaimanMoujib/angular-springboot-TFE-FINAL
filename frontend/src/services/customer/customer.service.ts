import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: {}[];

  constructor() {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    phoneNumber: new FormControl(''),
    rights: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      lastName: '',
      mail: '',
      phoneNumber: 0,
      rights: ''
    })
  }

  populateFormGroup(product) {
    console.log(product);
    this.form.setValue(product);
  }

  getAllCustomers() {
    this.customers = [
      {
        id: 1,
        name: 'Tintin',
        lastName: 'Milou',
        mail: 'zoophilien@gmail.com',
        phoneNumber: '07878894854',
        rights: 'admin'
      },
      {
        id: 2,
        name: 'Bob',
        lastName: 'Dupont',
        mail: 'bobdupont@gmail.com',
        phoneNumber: '987879879',
        rights: 'master'
      }
    ];
    return this.customers
  }
}
