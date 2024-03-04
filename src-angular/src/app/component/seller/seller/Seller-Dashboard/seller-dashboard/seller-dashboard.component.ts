import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {

  constructor(private router:Router, private localStorageService:LocalStorageService){
  }
  ngOnInit() {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
  }
  goToAddProduct(){
    this.router.navigate(['/seller-dashboard/add-products']);
  }

  goToViewCategories(){
    this.router.navigate(['/seller-dashboard/view-categories']);
  }
  goToViewSubCategories(){
    this.router.navigate(['/seller-dashboard/view-sub-categories']);
  }
  goToViewProducts(){
    this.router.navigate(['/seller-dashboard/view-My-Products']);
  }
  goToViewOrders(){
    this.router.navigate(['/seller-dashboard/view-orders']);
  }
  goToViewPayments(){
    this.router.navigate(['/seller-dashboard/view-payments']);
  }
  goToViewProfile(){
    this.router.navigate(['/seller-dashboard/view-profile']);
  }
 
}
