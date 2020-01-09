import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  subCategories: any;

  categories: {}[];

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sex: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)]),
    category: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      sex: '',
      category: ''
    })
  }

  populateFormGroup(discount) {
    console.log(discount);
    this.form.setValue(discount);
  }

  getCategories() {
    this.categories = ['Men Apparel', 'Women Apparel', 'Supplement', 'Accessories'];
    return this.categories;
  }

  getAllSubCategories() {
    this.subCategories = [
      {
        id: 1,
        name: 'Whey Isolate',
        sex: 'male',
        category: 'supplement'
      },
      {
        id: 2,
        name: 'Weight Vest',
        sex: 'female',
        category: 'accessories'
      }
    ];
    return this.subCategories;
  }
}
