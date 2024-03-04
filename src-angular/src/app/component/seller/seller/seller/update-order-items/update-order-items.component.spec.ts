import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderItemsComponent } from './update-order-items.component';

describe('UpdateOrderItemsComponent', () => {
  let component: UpdateOrderItemsComponent;
  let fixture: ComponentFixture<UpdateOrderItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderItemsComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
