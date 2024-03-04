import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { CustomerService } from 'src/app/service/registration/customer.service';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent {
  otp:string ='';
  paymentType: any;
 

  constructor(private customerService:CustomerService,
    private localstorage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.paymentType = params['paymentType'];
      });
    }

  
    sendOtp() {
      const username = this.localstorage.getItem("username");
      const contactNumber = this.localstorage.getItem("contactNumber");
      
    
      this.customerService.sendingOTP(username, contactNumber).subscribe(
        response => {
          console.log("OTP sent successfully:", response)
        },
        error => {
          console.error("Error sending OTP:", error);
        }
      );
    }

    submitOtp() {
      const otp = this.otp;
      const customerId = this.localstorage.getItem("customerId");
      const paymentMethod = this.paymentType;
      this.customerService.placeOrder(customerId, paymentMethod, otp).subscribe(
        (response: string) => {
          console.log("Order placed successfully:", response);
          this.router.navigate(['customer/orderPlaced']);
        },
        (error) => {
          console.error("Failed to place order:", error);
          this.router.navigate(['customer/orderPlaced']);
        }

      );
    }
    
      

      
        }

