import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCountryListComponent } from './admin-country-list.component';

describe('AdminCountryListComponent', () => {
  let component: AdminCountryListComponent;
  let fixture: ComponentFixture<AdminCountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
