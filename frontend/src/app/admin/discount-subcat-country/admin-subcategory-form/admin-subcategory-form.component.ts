import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../services/product/category.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-subcategory-form',
  templateUrl: './admin-subcategory-form.component.html',
  styleUrls: ['./admin-subcategory-form.component.scss']
})
export class AdminSubcategoryFormComponent implements OnInit {

  constructor(private service: CategoryService,
              private dialog: MatDialogRef<AdminSubcategoryFormComponent>) { }

  ngOnInit() {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose() {
    //Check what to add here -> 2 lines
    this.service.form.reset();
    this.dialog.close();
  }

}
