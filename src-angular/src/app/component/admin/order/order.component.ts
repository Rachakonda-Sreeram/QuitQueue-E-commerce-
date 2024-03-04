import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: any[] = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.adminService.getAllOrders().subscribe(res => {
      console.log(res);
      this.orders = res;
    });
  }

  redirectToViewOrderItems(orderId: number) {
    this.router.navigate(['/admin-dashboard/orders/view-order-items', orderId]);
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }

}
