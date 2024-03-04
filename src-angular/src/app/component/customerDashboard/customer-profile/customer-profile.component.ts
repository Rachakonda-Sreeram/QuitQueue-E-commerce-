import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  Profile:string="Profile";
   customerId:number;
   customerName:string;
   contactNumber:number;
   email:string;
   username:string;
   address:string;
   role:string;
  //  username:string;


  constructor(private localStorageService: LocalStorageService,private router: Router){
    this.customerId=localStorageService.getItem('customerId');
    this.customerName=localStorageService.getItem('customerName');
    this.contactNumber=localStorageService.getItem('contactNumber');
    this.email=localStorageService.getItem('email');
    this.username=localStorageService.getItem('username');
    this.address=localStorageService.getItem('address').addressLine1 +" , "+ localStorageService.getItem('address').city +" , "+ localStorageService.getItem('address').country +" , "+ localStorageService.getItem('address').postalCode+" , "+ localStorageService.getItem('address').state;
    // this.address= `${localStorageService.getItem('address').addressLine1}\n
    // ${localStorageService.getItem('address').city}\n
    // ${localStorageService.getItem('address').country}\n
    // ${localStorageService.getItem('address').postalCode}\n
    // ${localStorageService.getItem('address').state}`;
    this.role=localStorageService.getItem('role');
  }
  
  navigate() {
    this.router.navigate(['customer/product']);
}
}
