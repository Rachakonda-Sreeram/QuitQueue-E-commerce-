import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { SubCategory } from 'src/app/model/subcategory.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent {
  newSubCategory: SubCategory = {
    subCategoryId: 0,
    subCategoryName: '',
    category: {
      categoryId: 0,
      categoryName: ''
    },
    categoryId: 0,
    categoryName: ''
  };

  categories: Category[] = []; 

  subCategoryAdded: boolean = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.adminService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addSubCategory() {
    this.adminService.addSubCategory(this.newSubCategory).subscribe(res => {
      console.log(res);
      this.subCategoryAdded = true;
      this.newSubCategory = {
        subCategoryId: 0,
        subCategoryName: '',
        category: {
          categoryId: 0,
          categoryName: ''
        },
    categoryId: 0,
    categoryName: ''
      };
      this.subCategoryAdded = true;
      alert("Subcategory added successfully!");
      this.router.navigate(['admin-dashboard/sub-categories'])
    }, error => {
      console.error('Error adding subcategory:', error);
    });
  }
  goBack(){
    this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
  }
}
