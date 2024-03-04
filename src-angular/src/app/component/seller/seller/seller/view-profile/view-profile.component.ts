import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SellerService } from 'src/app/service/registration/seller.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  Profile: any;
  sellerId:any;
  constructor(private localStoraage:LocalStorageService,private sellerService:SellerService, private router: Router) { }
  ngOnInit(){
    if(!this.localStoraage.getItem('token')){
      this.router.navigate(['/login']);
    }
    this.viewProfile()
  }
  viewProfile() {
     this.sellerId = this.localStoraage.getItem("sellerId");
    this.sellerService.viewSellerById(this.sellerId).subscribe(res=>{
      console.log(res);
      this.Profile=res;
    })
    
}
goBack(){
  this.router.navigate(['/seller-dashboard']);
}

}
