import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {
  subCategory:any;
  constructor(private adminService:AdminService, private router:Router) { }
  ngOnInit(): void {
    this.getAllSubCategories();
    
  }
  getAllSubCategories(): void {
    this.adminService.getAllSubCategories().subscribe(res=>{
      console.log(res)
      this.subCategory=res
    })
  }

  deleteSubCategory(id:number){
    this.adminService.deleteSubCategory(id).subscribe(res=>{
      console.log(res)
      this.getAllSubCategories()
    })
  }

  redirectToSubCategoryForm(){
    this.router.navigate(['admin-dashboard/sub-categories/add-subcategory']);
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
}
