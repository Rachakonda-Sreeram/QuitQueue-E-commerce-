import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order.model';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  order:any;

  constructor(private sellerService: SellerService, private localStorageService: LocalStorageService, private router : Router) {}

  ngOnInit(): void {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.viewSellerOrders();
  }

 viewSellerOrders(){
  const sellerId = this.localStorageService.getItem('sellerId');
  this.sellerService.viewSellerOrders(sellerId).subscribe(res => {
    console.log(res);
    this.order = res;
  });
 }

 updateOrder(order: Order){

this.sellerService.updateOrder(order).subscribe(res => {
  console.log(res);
  this.viewSellerOrders();

 });

}

redirectToOrderItems(orderId: number){
  this.router.navigate(['seller-dashboard/view-orders/update-order-items',orderId]);

}
goBack(){
  this.router.navigate(['/seller-dashboard']);
}
}
