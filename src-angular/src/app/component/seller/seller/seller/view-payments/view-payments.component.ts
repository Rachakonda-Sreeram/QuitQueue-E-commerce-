import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/model/payment.model';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-payments',
  templateUrl: './view-payments.component.html',
  styleUrls: ['./view-payments.component.css']
})
export class ViewPaymentsComponent implements OnInit {


  payment:any;
  order:any;
  constructor(private sellerService:SellerService, private localStorageService:LocalStorageService, private router:Router){}
  ngOnInit() {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.viewMyPayments();
    
  }
viewMyPayments(){
  const sellerId = this.localStorageService.getItem('sellerId');
  console.log(sellerId);
  this.sellerService.viewMyPayments(sellerId).subscribe((res)=>{
    console.log(res)
    this.payment=res
  })
}
goBack(){
  this.router.navigate(['/seller-dashboard']);
}
}
