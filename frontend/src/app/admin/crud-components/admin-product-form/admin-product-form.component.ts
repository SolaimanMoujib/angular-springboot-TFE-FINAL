import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product/product.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  constructor(private service: ProductService,
              private dialog: MatDialogRef<AdminProductFormComponent>) {
  }

  subcategories = [
    {id:1, value:'Whey'},
    {id:2, value:'Upper'}
  ];

  categories = [
    {id: 1, value: 'Men'},
    {id: 2, value: 'Women'},
    {id: 3, value: 'Supplement'},
    {id: 1, value: 'Accessories'},
  ];

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
