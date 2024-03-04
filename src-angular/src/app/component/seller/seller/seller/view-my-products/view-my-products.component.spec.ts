import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyProductsComponent } from './view-my-products.component';

describe('ViewMyProductsComponent', () => {
  let component: ViewMyProductsComponent;
  let fixture: ComponentFixture<ViewMyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMyProductsComponent]
    });
    fixture = TestBed.createComponent(ViewMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
