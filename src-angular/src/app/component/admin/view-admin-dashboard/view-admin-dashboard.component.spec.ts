import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminDashboardComponent } from './view-admin-dashboard.component';

describe('ViewAdminDashboardComponent', () => {
  let component: ViewAdminDashboardComponent;
  let fixture: ComponentFixture<ViewAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(ViewAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
