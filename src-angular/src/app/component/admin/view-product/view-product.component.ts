import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  product:any;
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.adminService.getAllProducts().subscribe(res=>{
      console.log(res);
      this.product=res;
    })
  }

  deleteProduct(id:number){
    this.adminService.deleteProduct(id).subscribe(res=>{
      console.log(res)
      this.getAllProducts()
    })
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
}
