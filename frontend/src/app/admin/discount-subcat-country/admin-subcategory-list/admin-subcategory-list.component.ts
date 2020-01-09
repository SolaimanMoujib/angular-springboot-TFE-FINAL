import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AdminSubcategoryFormComponent} from '../admin-subcategory-form/admin-subcategory-form.component';
import {CategoryService} from '../../../../services/product/category.service';

@Component({
  selector: 'app-admin-subcategory-list',
  templateUrl: './admin-subcategory-list.component.html',
  styleUrls: ['./admin-subcategory-list.component.scss']
})
export class AdminSubcategoryListComponent implements OnInit {

  subCategories: any;

  constructor(private dialog: MatDialog,
              private service: CategoryService) { }

  searchKey: '';

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'sex', 'category', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.subCategories = this.service.getAllSubCategories();
    this.listData = new MatTableDataSource(this.subCategories);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
  }

  onCreateSubcategory() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminSubcategoryFormComponent, dialogConfig);
  }


  onEditSubcategory(subcategory) {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log(subcategory);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminSubcategoryFormComponent, dialogConfig);
    this.service.populateFormGroup(subcategory);
  }

  onDeleteSubcategory(subcategory: any): void {
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
