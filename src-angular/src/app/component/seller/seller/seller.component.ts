import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/model/seller.model';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  sellerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private seller: SellerService) { }

  ngOnInit(): void {
    this.sellerForm = this.formBuilder.group({
      sellerName: ['', Validators.required],
      businessName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      sellingDomain: ['', Validators.required],
      username: ['', [Validators.required, this.usernameValidator]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      role:['seller']
    });
  }

  get f() {
    return this.sellerForm.controls;
  }

  registerSeller(): void {
    this.submitted = true;
    if (this.sellerForm.valid) {
      const data: Seller = this.sellerForm.value;
      this.seller.addSeller(data).subscribe(
        (res: any) => {
          if (res == null) {
            alert("Registration failed! Try Again..");
          } else {
            alert("Seller Registered Successfully! Go to Login Page");
          }
        }
      );
    }
  }

  usernameValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && !control.value.startsWith('SEL_')) {
      return { startsWithSEL_: true };
    }
    return null;
  }
}
