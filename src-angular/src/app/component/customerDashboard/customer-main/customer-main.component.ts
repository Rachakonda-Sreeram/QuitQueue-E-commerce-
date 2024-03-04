import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent{
  [x: string]: any;
      title="Quit Queue";
      searchData:{query:string, result:Product[]};   
      customerSideNavStatus:boolean=false;
      constructor(private localstorage:LocalStorageService,   private router: Router){
        if(!this.localstorage.getItem('token')){
        this.router.navigate(['/login'])
        }
      }
     ngOnInit(){
      if(!this.localstorage.getItem('token')){
      this.router.navigate(['/login'])
      }
     } 
     
}
