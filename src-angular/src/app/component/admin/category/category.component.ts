import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category:any;
  
  constructor(private adminService: AdminService, private router: Router){

  }
ngOnInit(): void {
  this.getAllCategories()
}

getAllCategories(){
  this.adminService.getAllCategories().subscribe(res=>{
    console.log(res)
    this.category=res
  })
}
deleteCategory(id:number){
  this.adminService.deleteCategory(id).subscribe(res=>{
    console.log(res)
    this.getAllCategories()
  })
}
redirectToCategoryForm() {
  this.router.navigate(['admin-dashboard/categories/add-category']);
}


goBack(){
  this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
}
}
