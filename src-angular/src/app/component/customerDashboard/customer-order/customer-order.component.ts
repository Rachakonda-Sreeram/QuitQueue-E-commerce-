import { Component } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { CustomerService } from 'src/app/service/registration/customer.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent {
    title="Your Orders";
    // orderId:number;
    // totalAmount:number;
    // orderDate:Date;
    // deliveryDate:Date;
    // paymentMethod:string;
    // paymentStatus:string;
    orders:Order[];
    constructor(private customerService:CustomerService){
    
    }
    ngOnInit(){
      this.getAllOrdersByCustomerId();
    }
    getAllOrdersByCustomerId(){
        this.customerService.getAllOrdersByCustomerId().subscribe(orders=>{
          this.orders = orders;
          console.log(orders);
        })
    }

    // this.cartService.getAllCartItems().subscribe(items=>{
    //   this.items=items;
    //   this.grandTotal=items[0]?.cart.totalPrice;
    //   console.log(items);
      
    // });
}
