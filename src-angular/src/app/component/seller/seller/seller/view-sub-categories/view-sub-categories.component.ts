import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-sub-categories',
  templateUrl: './view-sub-categories.component.html',
  styleUrls: ['./view-sub-categories.component.css']
})
export class ViewSubCategoriesComponent implements OnInit {

  subCategory:any;
  constructor(private sellerService:SellerService, private router:Router,private localStorageService:LocalStorageService) { }
  ngOnInit(): void {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.getAllSubCategories();
    
  }
  getAllSubCategories(): void {
    this.sellerService.getAllSubCategory().subscribe(res=>{
      console.log(res)
      this.subCategory=res
    })
  }
  goBack(){
    this.router.navigate(['/seller-dashboard']);
  }

}
