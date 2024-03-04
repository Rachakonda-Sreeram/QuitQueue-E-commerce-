import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jspdf from 'jspdf';
import { OrderItem } from 'src/app/model/OrderItem.model';
import { Order } from 'src/app/model/order.model';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';


@Component({
  selector: 'app-update-order-items',
  templateUrl: './update-order-items.component.html',
  styleUrls: ['./update-order-items.component.css']
})
export class UpdateOrderItemsComponent {

  orderItems:any;
  orderId:any;
  sellerId:any;
  constructor(private sellerService:SellerService, private route: ActivatedRoute,private localStorageService:LocalStorageService, private router:Router){}

  ngOnInit() {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    this.viewAllOrderItemsOfSellerInOrder()
    
  });
}
  viewAllOrderItemsOfSellerInOrder(){
    this.sellerId = this.localStorageService.getItem('sellerId')
    this.sellerService.viewAllOrderItemsOfSellerInOrder(this.orderId,this.sellerId).subscribe(res=>{
      console.log(res)
      this.orderItems=res
    })
  }
  goBack(){
    this.router.navigate(['/seller-dashboard/view-orders']);
  }

  updateOrderItem(orderItem: OrderItem) {
    console.log(orderItem);
    console.log(this.orderId);
    this.sellerService.getOrderById(this.orderId).subscribe((order: Order) => {
      orderItem.order = order;
      console.log(orderItem.order);
      this.sellerService.updateOrderItem(orderItem).subscribe(res => {
        console.log(res);
        this.viewAllOrderItemsOfSellerInOrder();
      });
    });
  }

  downloadPDF() {
    var doc = new jspdf('l', 'mm', [295, 210]);
    
    
    const header = ['OrderItem Id', 'Product Name', 'Seller Name', 'Quantity', 'Total Price', 'Status', 'Status Description', 'Delivery Date'];
    let y = 20;
    let x = 10;
    let rows: { [key: string]: string }[] = [];
    this.orderItems.forEach((item: any) => {
        const rowObject = {
            'OrderItem Id': item.orderItemId.toString(),
            'Product Name': item.product.productName,
            'Seller Name': item.seller.sellerName,
            'Quantity': item.quantity.toString(),
            'Total Price': item.price.toString(),
            'Status': item.status,
            'Status Description': item.statusDescription,
            'Delivery Date': item.deliveryDate.toString()
        };
        rows.push(rowObject);
        y += 10;
    });
    var config = {
        autoSize: false,
        printHeaders: true
    }
    doc.setFontSize(10);
    doc.table(x, y, rows, header, config);
    doc.save('order_items_seller.pdf');
}

}
