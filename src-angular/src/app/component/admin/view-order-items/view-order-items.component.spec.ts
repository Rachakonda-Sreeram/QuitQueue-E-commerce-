import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderItemsComponent } from './view-order-items.component';

describe('ViewOrderItemsComponent', () => {
  let component: ViewOrderItemsComponent;
  let fixture: ComponentFixture<ViewOrderItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOrderItemsComponent]
    });
    fixture = TestBed.createComponent(ViewOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
