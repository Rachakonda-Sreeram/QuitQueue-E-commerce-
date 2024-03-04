import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment:any;
  last:any;
  constructor(private adminService: AdminService, private router:Router){}
  ngOnInit(){
    this.viewPayments()
  }
  viewPayments(){
    this.adminService.getAllPayments().subscribe(res=>{
      console.log(res);
      this.payment=res;
    })
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
}
