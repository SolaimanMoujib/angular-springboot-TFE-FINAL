import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../../services/product/product.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AdminProductFormComponent} from '../admin-product-form/admin-product-form.component';
import {CategoryService} from '../../../../services/product/category.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  products: Array<any>;

  categories: {}[];

  subcategories: {}[];

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'price', 'category', 'subcategory', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  constructor(private dialog: MatDialog,
              private service: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllProducts();
    this.categories = this.categoryService.getCategories();
    this.listData = new MatTableDataSource(this.products);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    }, error => {
      console.log(error);
    })
  }

  onCreateProduct() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminProductFormComponent, dialogConfig);
  }

  onEditProduct(product) {

    console.log(product);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminProductFormComponent, dialogConfig);
    this.service.populateFormGroup(product);
  }

  onDeleteProduct(product: any): void {
    console.log('Delete method appellée');
  }

  addProduct(): void {

  }

  onSearchClear() {
    this.searchKey ='';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
