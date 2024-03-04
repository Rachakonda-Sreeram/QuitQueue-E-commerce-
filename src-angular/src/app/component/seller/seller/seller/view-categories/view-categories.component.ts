import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  category:any;

  constructor(private sellerService:SellerService,private localStorageService:LocalStorageService, private router:Router) { }


  ngOnInit(): void {
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
    this.getAllCategories()
  }
  
  getAllCategories(){
    this.sellerService.getAllCategory().subscribe(res=>{
      console.log(res)
      this.category=res
    })
  }
  goBack(){
    this.router.navigate(['/seller-dashboard']);
  }

}
