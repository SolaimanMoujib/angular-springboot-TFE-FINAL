import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  discounts: any;

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    code: new FormControl('', [Validators.required, Validators.minLength(3)]),
    percentage: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)]),
    active: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      code: '',
      percentage: '',
      active: ''
    })
  }

  populateFormGroup(discount) {
    console.log(discount);
    this.form.setValue(discount);
  }

  getAllDiscounts() {
    this.discounts = [
      {
        id: 1,
        code: 'AAAAAA',
        percentage: 40,
        active: true
      },
      {
        id: 2,
        code: 'BBBBBB',
        percentage: 30,
        active: true
      }
    ];
    return this.discounts;
  }
}
