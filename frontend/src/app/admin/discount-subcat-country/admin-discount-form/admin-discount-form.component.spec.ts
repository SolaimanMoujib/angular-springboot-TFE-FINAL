import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscountFormComponent } from './admin-discount-form.component';

describe('AdminDiscountFormComponent', () => {
  let component: AdminDiscountFormComponent;
  let fixture: ComponentFixture<AdminDiscountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiscountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
