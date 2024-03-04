import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit{
  customer:any;
  last:any;
  constructor(private adminService: AdminService, private router:Router) { }
  ngOnInit(): void {
    this.getAllCustomers();
  }
  getAllCustomers(): void {
    this.adminService.getAllCustomers().subscribe(res => {
      console.log(res);
      this.customer = res;
    });
  }
  removeCustomer(id: number): void {
    this.adminService.deleteCustomer(id).subscribe(res => {
      console.log(res);
      this.getAllCustomers();
    });
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }


}
