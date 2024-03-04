import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(private router:Router){}

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  viewProfile() {
    this.router.navigate(['/admin-dashboard/view-admin']);
  }

  addAdmin() {
    this.router.navigate(['/admin-dashboard/add-admin']);
  }
  Logout() {
     this.router.navigate(['/login']);
    }
}
