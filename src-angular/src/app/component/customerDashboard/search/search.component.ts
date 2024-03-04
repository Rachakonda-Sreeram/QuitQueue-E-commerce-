import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { SearchService } from 'src/app/service/helperServices/searchState.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title:string="Search results for ";
  data="initial data";
  // query:string;
  // product:Product[];
   searchData:{query:string; result:Product[]}
  constructor(private router:Router, private searchService:SearchService){
    // const obj=this.router.getCurrentNavigation()?.extras.state;
    // if(obj?.['query']){
    //   this.query=obj['query'];
    // }
    // if(obj?.['result']){
    //   this.product=obj['result'];
    // }
  }
  ngOnInit(){
    this.searchService.data$.subscribe((newData) => {
      this.searchData = newData;
    });
  }

}
