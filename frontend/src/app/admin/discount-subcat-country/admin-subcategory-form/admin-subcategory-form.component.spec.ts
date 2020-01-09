import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubcategoryFormComponent } from './admin-subcategory-form.component';

describe('AdminSubcategoryFormComponent', () => {
  let component: AdminSubcategoryFormComponent;
  let fixture: ComponentFixture<AdminSubcategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubcategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubcategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
