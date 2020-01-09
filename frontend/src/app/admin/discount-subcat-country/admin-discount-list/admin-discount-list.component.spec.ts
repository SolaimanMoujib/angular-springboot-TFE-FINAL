import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscountListComponent } from './admin-discount-list.component';

describe('AdminDiscountListComponent', () => {
  let component: AdminDiscountListComponent;
  let fixture: ComponentFixture<AdminDiscountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiscountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
