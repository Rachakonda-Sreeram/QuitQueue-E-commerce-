import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
 constructor(private http:HttpClient) { }

    baseURL:string = 'http://localhost:8080/api/';

    getGeneratedToken(requestBody: any){
        if (requestBody.username.startsWith('ADMIN_')) {
          return this.http.post(this.baseURL + "admin/login/authenticate", requestBody, { responseType: 'text' as 'json' });
      } else if (requestBody.username.startsWith('SEL_')) {
          return this.http.post(this.baseURL + "seller/login/authenticate", requestBody, { responseType: 'text' as 'json' });
      } else {
          return this.http.post(this.baseURL + "customer/login/authenticate", requestBody, { responseType: 'text' as 'json' });

    }
  }

    authorizationTest(token:any){

          let tokenString = "Bearer "+token;

          const headers =  new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
          }).set("Authorization",tokenString);

          // if (requestBody.username.startsWith('ADMIN_')) {
        return this.http.get(this.baseURL+"admin/viewAllProduct",{headers,responseType:'text' as 
        'json'});
          }


    }
    // authorizationTest(token: any) {
    //   let tokenString = "Bearer "+token;

    //   const headers =  new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:4200'
    //   }).set("Authorization",tokenString);


    // return this.http.get(this.baseURL+"products/getall",{headers,responseType:'text' as 'json'});
    // }
    

