import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-my-products',
  templateUrl: './view-my-products.component.html',
  styleUrls: ['./view-my-products.component.css']
})
export class ViewMyProductsComponent {

  products: Product[] = [];

  constructor(private sellerService:SellerService, private localStorageService:LocalStorageService, private router:Router){}

  ngOnInit(): void {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.getAllProducts();
  }
  
  getAllProducts(){
    const sellerId = this.localStorageService.getItem('sellerId');
    console.log(sellerId);
    this.sellerService.viewMyProduct(sellerId).subscribe(
      (res: Product[] | Product) => {
        if (Array.isArray(res)) { // Check if res is an array
          console.log(res);
          this.products = res;
        } else { // Handle case when res is a single Product
          console.log(res);
          this.products = [res]; // Wrap the single product in an array
        }
      },
      error => {
        console.error('Error fetching products: ', error);
      }
    );
  }

  deleteProduct(id:number){
    this.sellerService.deleteProduct(id).subscribe(res=>{
      console.log(res)
      this.getAllProducts();
    })
  }


  updateProduct(product: Product){
    console.log(product);
    this.sellerService.updateProduct(product).subscribe(res=>{
      console.log(res)
      this.getAllProducts();
    })
  }
  goBack(){
    this.router.navigate(['/seller-dashboard']);
  }

  }
