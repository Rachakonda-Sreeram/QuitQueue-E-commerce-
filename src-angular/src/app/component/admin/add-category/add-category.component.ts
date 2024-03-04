import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  newCategory: any = {
    categoryId: null,
    categoryName: ''
  };
  categoryAdded: boolean = false;

  constructor(private adminService:AdminService, private router:Router) { }

ngOnInit(){
  this.addCategory();
}


  addCategory() {
    this.adminService.addCategory(this.newCategory).subscribe(res => {
      console.log(res);
      this.newCategory = {
        categoryId: null,
        categoryName: ''
      };
      this.categoryAdded = true;
      alert("Category added successfully!");
      this.router.navigate(['admin-dashboard/categories'])
      this.adminService.getAllCategories();
    }, error => {
      console.error('Error adding category:', error);
    });
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
}
