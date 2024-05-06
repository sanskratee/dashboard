import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCurdComponent } from './product-curd.component';

describe('ProductCurdComponent', () => {
  let component: ProductCurdComponent;
  let fixture: ComponentFixture<ProductCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
