import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  newAdmin: any = {}; 

  constructor(private adminService: AdminService) {}

  addAdmin() {
    this.newAdmin.role='admin';
    console.log(this.newAdmin);
     this.adminService.addAdmin(this.newAdmin).subscribe(res => {
      console.log(res);
       this.newAdmin = res; 
       alert("Admin added successfully!");
  })
    //, error => {
    //   console.error('Error occurred while adding admin:', error);
    // });
  }
}
