import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AdminCountryFormComponent} from '../admin-country-form/admin-country-form.component';
import {CountryService} from '../../../../services/customer/country.service';

@Component({
  selector: 'app-admin-country-list',
  templateUrl: './admin-country-list.component.html',
  styleUrls: ['./admin-country-list.component.scss']
})
export class AdminCountryListComponent implements OnInit {

  countries: any;

  constructor(private dialog: MatDialog,
              private service: CountryService) { }

  searchKey: '';

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.countries = this.service.getAllCountries();
    this.listData = new MatTableDataSource(this.countries);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
  }

  onCreateCountry() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminCountryFormComponent, dialogConfig);
  }


  onEditCountry(country) {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log(country);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminCountryFormComponent, dialogConfig);
    this.service.populateFormGroup(country);
  }

  onDeleteCountry(country: any): void {
    console.log('Delete method appellée');
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
