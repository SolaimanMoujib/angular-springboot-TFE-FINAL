import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DiscountService} from '../../../../services/product/discount.service';
import {AdminDiscountFormComponent} from '../admin-discount-form/admin-discount-form.component';

@Component({
  selector: 'app-admin-discount-list',
  templateUrl: './admin-discount-list.component.html',
  styleUrls: ['./admin-discount-list.component.scss']
})
export class AdminDiscountListComponent implements OnInit {

  discounts: any;

  searchKey: '';

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['code', 'percentage', 'active', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private dialog: MatDialog,
              private service: DiscountService) {
  }

  ngOnInit() {
    this.discounts = this.service.getAllDiscounts();
    this.listData = new MatTableDataSource(this.discounts);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
  }

  onCreateDiscount() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminDiscountFormComponent, dialogConfig);
  }


  onEditDiscount(discount) {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log(discount);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminDiscountFormComponent, dialogConfig);
    this.service.populateFormGroup(discount);
  }

  onDeleteDiscount(discount: any): void {
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
