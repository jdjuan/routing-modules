import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoBaseLoginComponent } from './producto-base-login.component';

describe('ProductoBaseLoginComponent', () => {
  let component: ProductoBaseLoginComponent;
  let fixture: ComponentFixture<ProductoBaseLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoBaseLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoBaseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
