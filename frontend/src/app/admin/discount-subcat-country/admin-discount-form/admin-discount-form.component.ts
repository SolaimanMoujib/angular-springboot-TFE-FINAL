import { Component, OnInit } from '@angular/core';
import {DiscountService} from '../../../../services/product/discount.service';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-discount-form',
  templateUrl: './admin-discount-form.component.html',
  styleUrls: ['./admin-discount-form.component.scss']
})
export class AdminDiscountFormComponent implements OnInit {

  constructor(private service: DiscountService,
              private dialog: MatDialogRef<AdminDiscountFormComponent>) { }

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
