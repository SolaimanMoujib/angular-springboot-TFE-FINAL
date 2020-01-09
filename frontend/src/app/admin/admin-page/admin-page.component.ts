import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  pageCategory: 'products' | 'users' | 'sales';

  constructor() {
  }

  ngOnInit() {
    this.pageCategory = 'products';
  }

  setPageCategory(value) {
    this.pageCategory = value;
    console.log(this.pageCategory);
  }
}
