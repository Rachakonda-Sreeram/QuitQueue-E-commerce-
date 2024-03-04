import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "src/app/model/customer.model";
import { CartService } from "src/app/service/cart.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { CustomerService } from "src/app/service/registration/customer.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent {
  paymentMethod = "cod";
  addressLine1: string;
  postalCode: string;
  city: string;
  state: string;
  customer: Customer;
grandtotal=0;
 
  constructor(
    private cartService:CartService,
    private localstorage: LocalStorageService,
    private changeDetectorRefs: ChangeDetectorRef,
    private localStorageService:LocalStorageService,
    private router:Router
  ) {
    const customerAddress = this.localstorage.getItem("address");
    this.postalCode = customerAddress.postalCode;
    this.city = customerAddress.city;
    this.state = customerAddress.state;
    this.addressLine1 = customerAddress.addressLine1;
    this.grandtotal=localStorageService.getItem('grandTotal');
    
  }
  setPaymentMethod(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
    this.changeDetectorRefs.detectChanges();
    // @Input
  }

  onSubmit(formData: NgForm) {
    console.log(this.paymentMethod);
    const  paymentType = this.paymentMethod;
     this.router.navigate(['customer/validateOTP',paymentType]);
 
    
    
}
}
