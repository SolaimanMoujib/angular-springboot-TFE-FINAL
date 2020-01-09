import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../../services/customer/country.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-country-form',
  templateUrl: './admin-country-form.component.html',
  styleUrls: ['./admin-country-form.component.scss']
})
export class AdminCountryFormComponent implements OnInit {

  constructor(private service: CountryService,
              private dialog: MatDialogRef<AdminCountryFormComponent>) { }

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
