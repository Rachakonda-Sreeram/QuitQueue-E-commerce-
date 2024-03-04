import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { AppState } from '../helperComps/state/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../helperComps/counter/counter.selector';
import { AsyncPipe } from '@angular/common';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  showModal:boolean=false;
  myProduct:Product;
  productList:Product[]=[];
  copyList:Product[]=[];
  brands:string[];
  @Output()
   title:string="Products";

  constructor(private productService: ProductService){
  
  }
  ngOnInit(): void {
    this.getAllProduct();
    // console.log(this.message);

  }
getAllProduct():void {
    this.productService.getAllProduct().subscribe((product)=>{
      this.productList = product;
      this.copyList = product;
     const brandOptions=Array.from(new Set(product?.map((product)=>
       product.brand
    )))
    brandOptions.unshift('All');
    this.brands=brandOptions;
      console.log(this.productList);
    })}
   
    sortProducts(order: 'asc' | 'desc') {
      if (order === 'asc') {
        this.productList.sort((a: Product, b: Product) => a.price - b.price);
      } else {
        this.productList.sort((a: Product, b: Product) => b.price - a.price);
      }
    }

    toggleModal() {
      this.showModal = !this.showModal; // Toggle the value of showModal
    }

    displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 

  viewByBrand(brandName:string) {
    console.log(this.copyList);
    this.copyList=this.productList.filter(product=>product.brand===brandName&&product)
    // console.log(this.copyList);
    
    }
}




