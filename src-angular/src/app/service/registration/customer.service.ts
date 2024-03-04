import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/model/order.model';
import { LocalStorageService } from '../local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  baseUrl:string="http://localhost:8080/api/customer";

  constructor(private http:HttpClient,private localstorageservice:LocalStorageService) { 
   
  
  
    }
  addCustomer(customer: any) {
    return this.http.post(this.baseUrl+"/register",customer);
  }
  getAllOrdersByCustomerId():Observable<Order[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
    })
    const customerId=this.localstorageservice.getItem('customerId');
    return this.http.get<Order[]>(this.baseUrl+"/viewOrdersByCustomerId/"+customerId,{ headers, responseType: 'json' });

    
  }
  sendingOTP(username: string, phoneNumber: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
      
    })
    console.log(headers)
    return this.http.post<string>(`${this.baseUrl}/sendingOTP/${username}/${phoneNumber}`,null, {headers, responseType:'text' as  'json'});
  }

  placeOrder(customerId: number, paymentMethod: string, otp: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.localstorageservice.getItem('token')
      
    })
    return this.http.post<string>(`${this.baseUrl}/placeOrder/${customerId}/${paymentMethod}/${otp}`, null,{headers, responseType:'text' as  'json'});
  }
 
  }

