import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-admin-dashboard',
  templateUrl: './view-admin-dashboard.component.html',
  styleUrls: ['./view-admin-dashboard.component.css']
})
export class ViewAdminDashboardComponent {
  constructor(private router:Router){



  }
  goToAddAdmin(){
    this.router.navigate(['/admin-dashboard/admin-add']);
  }
  goToViewCategories(){
    this.router.navigate(['/admin-dashboard/categories']);
  }
  goToViewSubCategories(){
    this.router.navigate(['/admin-dashboard/sub-categories']);
  }
  goToViewProducts(){
    this.router.navigate(['/admin-dashboard/products']);
  }
  goToViewSellers(){
    this.router.navigate(['/admin-dashboard/sellers']);
  }
  goToViewCustomers(){
    this.router.navigate(['/admin-dashboard/customers']);
  }
  goToOrders(){
    this.router.navigate(['/admin-dashboard/orders']);
  }
  goToPayments(){
    this.router.navigate(['/admin-dashboard/payments']);
  }

}
