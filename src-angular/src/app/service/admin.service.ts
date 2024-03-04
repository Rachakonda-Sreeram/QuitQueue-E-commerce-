import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin.model';
import { Product } from '../model/product.model';
import { Seller } from '../model/seller.model';
import { Customer } from '../model/customer.model';
import { Category } from '../model/category.model';
import { SubCategory } from '../model/subcategory.model';
import { LocalStorageService } from './local-storage.service';
import { Order } from '../model/order.model';
import { Payment } from '../model/payment.model';
import { OrderItem } from '../model/OrderItem.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
//  baseUrl:string="http://localhost:8080/api/admin";
 
//   constructor(private http:HttpClient,private localstorageservice: LocalStorageService ) { }

//   addAdmin(admin: Admin): Observable<Admin>{
//     return this.http.post<Admin>(this.baseUrl+"/addAdmin",admin);
//   }

//     getAllProducts(): Observable<Product[]> {
//       return this.http.get<Product[]>(this.baseUrl + "/viewAllProduct");
//     }
  
//     getAllCategories(): Observable<Category[]> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
//       })
//       console.log(headers);
//       return this.http.get<Category[]>(this.baseUrl + "/viewAllCategory",{headers,
//       responseType:'json'});
//     }
  
//     getAllSubCategories(): Observable<SubCategory[]> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': "Bearer "+this.localstorageservice.getItem('token')
//       })
//       return this.http.get<SubCategory[]>(this.baseUrl + "/viewAllSubCategory",{ headers, responseType: 'json' });
//     }
  
//     getAllSellers(): Observable<Seller[]> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
//       })
//       return this.http.get<Seller[]>(this.baseUrl + "/viewAllSeller",{headers:headers,
//         responseType:'json'});
//     }
  
//     getAllCustomers(): Observable<Customer[]> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
//       })
//       return this.http.get<Customer[]>(this.baseUrl + "/viewAllCustomer",{headers:headers,
//         responseType:'json'});
//     }
  
//     //getAllPayments(): Observable<Payment[]> {
//      // return this.http.get<Payment[]>(this.baseUrl + "/viewAllPayment");
//     //}
  
//     //getAllOrders(): Observable<Order[]> {
//      // return this.http.get<Order[]>(this.baseUrl + "/viewAllOrder");
//     //}
  
//     deleteProduct(id: number): Observable<String> {
//       return this.http.delete<String>(this.baseUrl + "/deleteProduct/" + id);
//     }
  
//     deleteCategory(id: number): Observable<String> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': "Bearer "+this.localstorageservice.getItem('token')
//       })
//       return this.http.delete<String>(this.baseUrl + "/deleteCategory/" + id,{ headers: headers, responseType: 'json' });
//     }
  
//     deleteSubCategory(id: number): Observable<String> {
//       const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': "Bearer "+this.localstorageservice.getItem('token')
//       })
//       return this.http.delete<String>(this.baseUrl + "/deleteSubCategory/" + id,{headers:headers});
//     }
  
//     deleteSeller(id: number): Observable<String> {
//       return this.http.delete<String>(this.baseUrl + "/deleteSeller/" + id);
//     }
  
//     deleteCustomer(id: number): Observable<String> {
//       return this.http.delete<String>(this.baseUrl + "/deleteCustomer/" + id);
//     }
  
//     addCategory(category: Category): Observable<Category> {
//       return this.http.post<Category>(this.baseUrl + "/addCategory", category);
//     }
  
//     addSubCategory(subcategory: SubCategory): Observable<SubCategory> {
//       return this.http.post<SubCategory>(this.baseUrl + "/addSubCategory", subcategory);
//     }
baseUrl:string="http://localhost:8080/api/admin";
constructor(private http:HttpClient,private localstorageservice: LocalStorageService) { }

private getHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
    
  });
}

addAdmin(admin: Admin): Observable<Admin>{
  
  return this.http.post<Admin>(this.baseUrl+"/addAdmin",admin,{ headers: this.getHeaders(), responseType: 'json' });
}

  getAllProducts(): Observable<Product[]> {
    
    return this.http.get<Product[]>(this.baseUrl + "/viewAllProduct",{ headers: this.getHeaders(), responseType: 'json' });
  }

  getAllCategories(): Observable<any[]> {
    
    return this.http.get<any[]>(this.baseUrl + "/viewAllCategory", { headers: this.getHeaders(), responseType: 'json' })
  }

  getAllSubCategories(): Observable<any[]> {
    
    return this.http.get<any[]>(this.baseUrl + "/viewAllSubCategory",{ headers: this.getHeaders(), responseType: 'json' });
  }

  getAllSellers(): Observable<Seller[]> {
    
    return this.http.get<Seller[]>(this.baseUrl + "/viewAllSeller",{ headers: this.getHeaders(), responseType: 'json' });
  }

  getAllCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this.baseUrl + "/viewAllCustomer",{ headers: this.getHeaders(), responseType: 'json' });
  }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl + "/viewAllPayment",{ headers: this.getHeaders(), responseType: 'json' });
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "/viewAllOrder",{ headers: this.getHeaders(), responseType: 'json' });
  }

  deleteProduct(id: number): Observable<String> {
    
    return this.http.delete<String>(this.baseUrl + "/deleteProduct/" + id,{ headers: this.getHeaders(), responseType:'text' as  'json' });
  }

  deleteCategory(id: number): Observable<String> {
    return this.http.delete<String>(this.baseUrl + "/deleteCategory/" + id,{ headers: this.getHeaders(),responseType:'text' as  'json' });
  }

  deleteSubCategory(id: number): Observable<String> {
    
    return this.http.delete<String>(this.baseUrl + "/deleteSubCategory/" + id,{ headers: this.getHeaders(), responseType:'text' as  'json' });
  }

  deleteSeller(id: number): Observable<String> {
    
    return this.http.delete<String>(this.baseUrl + "/deleteSeller/" + id,{ headers: this.getHeaders(), responseType:'text' as  'json' });
  }

  deleteCustomer(id: number): Observable<String> {
    
    return this.http.delete<String>(this.baseUrl + "/deleteCustomer/" + id,{ headers: this.getHeaders(),responseType:'text' as  'json'  });
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + "/addCategory", category,{ headers: this.getHeaders(), responseType: 'json' });
  }

  addSubCategory(subcategory: SubCategory): Observable<SubCategory> {
    return this.http.post<SubCategory>(this.baseUrl + "/addSubCategory", subcategory,{ headers: this.getHeaders(), responseType: 'json' });
  }

  viewAdminById(adminId: number): Observable<Admin> {
    
    return this.http.get<Admin>(this.baseUrl + "/viewAdminById/" + adminId,{ headers: this.getHeaders(), responseType: 'json' });
  }

  getOrderItems(orderId : number): Observable<OrderItem[]>{
    return this.http.get<OrderItem[]>(this.baseUrl + "/getOrderItemsByOrderId/" + orderId,{ headers: this.getHeaders(), responseType: 'json' });
  }
  
}
