import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/service/registration/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { Order } from 'src/app/model/order.model';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer: any = {
  customerName: '',
  gender: '',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
  role: '',
  address: {
    addressLine1: '',
    postalCode: 0,
    city: '',
    state: '',
    country: ''
  }
};

submitted = false;

constructor(private customerService: CustomerService) { }

onSubmit(customerForm: NgForm) {
  this.submitted = true;
  if (customerForm.valid) {
    alert("New Customer Registered!");
    this.customerService.addCustomer(this.customer)
      .subscribe(
        response => {
          console.log('Customer added successfully:', response);
          customerForm.resetForm();
          this.submitted = false;
        },
        error => {
          console.error('Error adding customer:', error);
        }
      );
  }
}
}