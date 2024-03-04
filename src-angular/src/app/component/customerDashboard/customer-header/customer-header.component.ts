import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
// import { Router, RouterLink } from '@angular/router';
import { Product } from "src/app/model/product.model";
import { SearchService } from "src/app/service/helperServices/searchState.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: "app-customer-header",
  templateUrl: "./customer-header.component.html",
  styleUrls: ["./customer-header.component.css"],
})
export class CustomerHeaderComponent implements OnInit {
  productList: Product[];
  routeLink = "searchResult";

  // onSearch() {
  //     console.log('Searching for: ', this.searchQuery);
  // }
  constructor(
    private productService: ProductService,
    private searchService: SearchService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}
  searchQuery: string = "";
  ngOnInit(): void {}

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }


  getAllProductsBySubcategory(searchQuery: string): void {
    this.productService
      .getAllProductbySubCategory(searchQuery)
      .subscribe((product: Product[]) => {
        this.productList = product;
        console.log(this.productList);
        // this.variable=" hi data is set"
        // this.inputChanged.emit(this.variable)
        // this.setData();
        // this.localStorageService.setItem('productList', JSON.stringify(this.productList))
        this.searchService.updatreSearchData({query:searchQuery, result:product});
        this.router.navigate(['/customer/searchResult']);
        // this.router.navigate(["/customer/searchResult"], {
        //   state: { query: searchQuery, result: product },
        // });
      });
  }
}
