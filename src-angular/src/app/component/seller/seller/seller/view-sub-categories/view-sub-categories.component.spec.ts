import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubCategoriesComponent } from './view-sub-categories.component';

describe('ViewSubCategoriesComponent', () => {
  let component: ViewSubCategoriesComponent;
  let fixture: ComponentFixture<ViewSubCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubCategoriesComponent]
    });
    fixture = TestBed.createComponent(ViewSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
