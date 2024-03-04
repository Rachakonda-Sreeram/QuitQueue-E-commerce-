import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  baseUrl:string="http://localhost:8080/api/customer"
  constructor(private http:HttpClient, private localstorageservice:LocalStorageService) { 
  }


  getAllProduct() :Observable<Product[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    })
    return this.http.get<Product[]>(this.baseUrl + "/viewAllProduct",{ headers, responseType: 'json' });
  }
  getAllProductbySubCategory(searchQuery: string):Observable<Product[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    })
    return this.http.get<Product[]>(this.baseUrl + "/viewProductsBySubCategoryName/"+searchQuery,{ headers, responseType: 'json' });
  }


}
