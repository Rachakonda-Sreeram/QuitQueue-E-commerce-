import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/model/Product';
// import { SubCategory } from 'src/app/model/SubCategory';
import { SellerService } from 'src/app/service/registration/seller.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Product } from 'src/app/model/product.model';
import { SubCategory } from 'src/app/model/subcategory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedSubCategoryId:number = 0;
  product: Product = {
    productId: 0,
    seller: {
      sellerId: 0,
      sellerName: '',
      businessName: '',
      phoneNumber: '',
      email: '',
      address: '',
      sellingDomain: '',
      username: '',
      password: '',
      role: ''
    },
    productName: '',
    productImageURL: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    brand: '',
    subCategory: {
      subCategoryId: 0,
      subCategoryName: '',
      category: {
        categoryId: 0,
        categoryName: ''
      },
      categoryId: 0,
      categoryName: ''
    }
  };
  subCategories: SubCategory[] = [];
  selectedSubCategory: SubCategory | undefined;

  constructor(private sellerService: SellerService, private localStorageService: LocalStorageService, private router:Router) { }

  ngOnInit() {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.loadSubCategories();
  }

  loadSubCategories() {
    this.sellerService.getAllSubCategory().subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    });
  }

  addProduct() {
    this.product.seller.sellerId = this.localStorageService.getItem('sellerId');
  
    const selectedSubCategoryId = this.selectedSubCategoryId;
  
    if (selectedSubCategoryId !== null) {
      this.sellerService.viewSubCategoryById(selectedSubCategoryId).subscribe(
        (selectedSubCategory: SubCategory) => {
          if (selectedSubCategory) {
            this.product.subCategory = selectedSubCategory;

            console.log(this.product);
            this.sellerService.addProduct(this.product).subscribe(res => {
              console.log('Response:', res);
              alert("Product added");
            });
          } else {
            console.log('No matching subcategory found for selected subCategoryId:', selectedSubCategoryId);
          }
        },
        (error) => {
          console.error('Error fetching subcategory:', error);
        }
      );
    } else {
      console.log('No subcategory is selected.');
    }
  }
  goBack(){
    this.router.navigate(['/seller-dashboard']);
  }
  
  
  
  
  
  
}
