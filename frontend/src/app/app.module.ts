import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navigation/navbar/navbar.component';
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {ShoppingCartComponent} from './menus/shopping-cart/shopping-cart.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {AdminProductListComponent} from './admin/crud-components/admin-product-list/admin-product-list.component';
import {AdminProductFormComponent} from './admin/crud-components/admin-product-form/admin-product-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../services/product/product.service';
import {AdminCustomerFormComponent} from './admin/crud-components/admin-customer-form/admin-customer-form.component';
import {AdminCustomerListComponent} from './admin/crud-components/admin-customer-list/admin-customer-list.component';
import {AdminDiscountListComponent} from './admin/discount-subcat-country/admin-discount-list/admin-discount-list.component';
import {AdminDiscountFormComponent} from './admin/discount-subcat-country/admin-discount-form/admin-discount-form.component';
import {AdminSubcategoryListComponent} from './admin/discount-subcat-country/admin-subcategory-list/admin-subcategory-list.component';
import {AdminSubcategoryFormComponent} from './admin/discount-subcat-country/admin-subcategory-form/admin-subcategory-form.component';
import {AdminCountryListComponent} from './admin/discount-subcat-country/admin-country-list/admin-country-list.component';
import {AdminCountryFormComponent} from './admin/discount-subcat-country/admin-country-form/admin-country-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    AdminPageComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminCustomerFormComponent,
    AdminCustomerListComponent,
    AdminDiscountListComponent,
    AdminDiscountFormComponent,
    AdminSubcategoryListComponent,
    AdminSubcategoryFormComponent,
    AdminCountryListComponent,
    AdminCountryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [AdminProductFormComponent, AdminCustomerFormComponent, AdminDiscountFormComponent, AdminSubcategoryFormComponent, AdminCountryFormComponent]
})
export class AppModule {
}
