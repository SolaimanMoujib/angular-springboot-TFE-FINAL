import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CustomerService} from '../../../../services/customer/customer.service';
import {AdminCustomerFormComponent} from '../admin-customer-form/admin-customer-form.component';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.scss']
})
export class AdminCustomerListComponent implements OnInit {

  customers: {}[];


  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'lastName', 'mail', 'phoneNumber', 'rights', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  constructor(private dialog: MatDialog,
              private service: CustomerService) {
  }

  ngOnInit() {
    this.customers = this.service.getAllCustomers();
    this.listData = new MatTableDataSource(this.customers);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
  }

  onEditCustomer(customer) {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log(customer);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminCustomerFormComponent, dialogConfig);
    this.service.populateFormGroup(customer);
  }

  onDeleteCustomer(customer: any): void {
    console.log('Delete method appellée');
  }

  onSearchClear() {
    this.searchKey ='';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
