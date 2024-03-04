import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  baseUrl:string="http://localhost:8080/api/customer"
  constructor(private http:HttpClient, private localstorageservice:LocalStorageService) { 
  }
  addToCart(productId: number):Observable<string> {
    const id=this.localstorageservice.getItem('customerId');
    const quantity=1;
    const headers = new HttpHeaders({
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    }).set('Content-Type', 'text/plain; charset=utf-8');
    console.log('im here', id, productId);
    
    return this.http.post<string>(this.baseUrl + `/addProductToCustomerCart/${id}/${productId}/${quantity}`,null,{ headers, responseType:undefined});
  }

}
