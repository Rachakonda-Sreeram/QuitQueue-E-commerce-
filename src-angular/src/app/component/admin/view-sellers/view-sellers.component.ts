import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-sellers',
  templateUrl: './view-sellers.component.html',
  styleUrls: ['./view-sellers.component.css']
})
export class ViewSellersComponent {
  seller:any;

  constructor(private adminService:AdminService, private router:Router){}
  ngOnInit(): void {
    this.viewAllSellers();
  }

  viewAllSellers(){
    this.adminService.getAllSellers().subscribe(res=>{
      console.log(res);
      this.seller=res;
    })
  }

  deleteSeller(id:number){
    this.adminService.deleteSeller(id).subscribe(res=>{
      console.log(res);
      this.viewAllSellers();
    })
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
  

}
