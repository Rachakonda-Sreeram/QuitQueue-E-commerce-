import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private getHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
    
  });
}
 
  baseUrl:string="http://localhost:8080/api/customer"
  constructor(private http:HttpClient, private localstorageservice:LocalStorageService) { 
  }
  getAllCartItems(): Observable<CartItem[] >{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    })
    const customerId=this.localstorageservice.getItem('customerId');
    return this.http.get<CartItem[]>(this.baseUrl + "/viewCartitems/"+customerId,{ headers, responseType: 'json' });
  }

  deleteCartItem(id: number):Observable<string > {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    })
    const customerId=this.localstorageservice.getItem('customerId');
    return this.http.post<string>(this.baseUrl+`/deleteProductFromCustomerCart/${customerId}/${id}`,null,{headers,responseType:'text' as  'json'})
  }
  placeOrder(paymentMethod:string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+this.localstorageservice.getItem('token')
  })
  const customerId=this.localstorageservice.getItem('customerId');
  return this.http.post<string>(this.baseUrl+`/placeOrder/${customerId}/${paymentMethod}`,null,{headers,responseType:'text' as  'json'})

}
addProductToCustomerCart(productId: number, quantity: number): Observable<string> {
  const customerId=this.localstorageservice.getItem('customerId');
  console.log(this.getHeaders())
  console.log(customerId)
  console.log(productId)
  console.log(quantity)

  return this.http.post<string>(this.baseUrl + `/addProductToCustomerCart/${customerId}/${productId}/${quantity}`,null,{headers:this.getHeaders(),responseType:'text' as  'json'})
 
}


}
