import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-side-nav',
  templateUrl: './customer-side-nav.component.html',
  styleUrls: ['./customer-side-nav.component.css']
})
export class CustomerSideNavComponent implements OnInit{

  @Input() customerSideNavStatus: boolean = false;
    list=[
      {
        number:'1',
        name:'home',
        icon:'fa-solid fa-house',
        route:'dashboard'
      },
      
      {
        number:'2',
        name:'Products',
        icon:'fa-solid fa-box',
        route:'product'
      },
      {
        number:'3',
        name:'Cart',
        icon:'fa-solid fa-cart-shopping',
        route:'cart'
      },
      {
        number:'4',
        name:'Orders',
        icon:'fa-solid fa-square-poll-horizontal',
        route:'customerOrder'
      },
      {
        number:'5',
        name:'About',
        icon:'fa-solid fa-circle-info',
        route:'about-us'
      },
      {
        number:'6',
        name:'Contact',
        icon:'fa-solid fa-phone',
        route:'contact-us'
      },
      {
        number:'7',
        name:'Logout',
        icon:'fa-solid fa-right-from-bracket',
        route:'/login'
      }

    ];

    constructor() { }
    ngOnInit(): void {
    }
    
}
