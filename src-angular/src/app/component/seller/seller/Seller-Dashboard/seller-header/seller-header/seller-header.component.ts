import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent {

  constructor(private router:Router,private localStorageService:LocalStorageService){}

  isDropdownOpen: boolean = false;
  ngOnInit(){
    if(!this.localStorageService.getItem('token')){
      this.router.navigate(['/login']); 
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  viewProfile() {
    this.router.navigate(['/seller-dashboard/view-profile']);
  }

  Logout() {
    this.router.navigate(['/login']);
  }

}
