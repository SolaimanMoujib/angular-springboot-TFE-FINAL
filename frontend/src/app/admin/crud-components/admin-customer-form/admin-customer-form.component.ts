import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../services/customer/customer.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-customer-form',
  templateUrl: './admin-customer-form.component.html',
  styleUrls: ['./admin-customer-form.component.scss']
})
export class AdminCustomerFormComponent implements OnInit {

  constructor(private service: CustomerService,
              private dialog: MatDialogRef<AdminCustomerFormComponent>) { }

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
