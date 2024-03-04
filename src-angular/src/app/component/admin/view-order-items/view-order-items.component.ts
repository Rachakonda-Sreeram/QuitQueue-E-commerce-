import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jspdf from 'jspdf';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-order-items',
  templateUrl: './view-order-items.component.html',
  styleUrls: ['./view-order-items.component.css']
})
export class ViewOrderItemsComponent {
  @Input() orderIdToShow: any;
  orderItems: any;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderIdToShow = params['orderId'];
      this.getOrderItems();
    });
  }

  getOrderItems() {
    console.log(this.orderIdToShow);
    this.adminService.getOrderItems(this.orderIdToShow).subscribe(res => {
      console.log(res);
      this.orderItems = res;
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
    doc.save('order_items_admin.pdf');
}
goBack(){
  this.router.navigate(['/admin-dashboard/orders']);
}

}
