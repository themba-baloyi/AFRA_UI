import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplierCostComponent } from './create-supplier-cost.component';

describe('CreateSupplierCostComponent', () => {
  let component: CreateSupplierCostComponent;
  let fixture: ComponentFixture<CreateSupplierCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupplierCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupplierCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
