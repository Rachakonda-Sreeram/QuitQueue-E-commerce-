import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/service/login/jwt-client.service';
import { AuthRequest } from 'src/app/model/AuthRequest';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response:any;
  token:any;
  role:any;

 
  authRequest: AuthRequest = new AuthRequest();


  // authRequest:any = {
  //   "username":"babu",
  //   "password":"babu123"
  //   }

 constructor(
  private jwtService:JwtClientService,
  private localStorageService: LocalStorageService,
  private jwtHelper: JwtHelperService,
  private router: Router){}


ngOnInit(): void {
  this.localStorageService.clear();
  
   // this.getAccessToken(this.authRequest);
}

 readFormData(formData:any){
    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;

    this.getAccessToken(this.authRequest);
  

 }



 public getAccessToken(authRequest: any) {
  let response = this.jwtService.getGeneratedToken(authRequest);
  
  response.subscribe(
    (resp) => {
      this.response= resp;
      this.response=JSON.parse(this.response);
      // this.token=JSON.parse(this.response);
      // this.token
      // console.log(JSON.parse(this.response));
      // this.response=JSON.parse(this.response);
      console.log(response, this.response);
      // console.log(this.token);
      // console.log(this.token.getAccessToken);
      // console.log(JSON.parse(this.response));
      this.token=this.response.token;
      console.log(this.token);
      // this.token=this.response.get('token');
      if (!this.token) {
        // If token is not generated, show invalid credentials alert
        alert("Invalid credentials");
      } else {
        // console.log(this.token.tokenGetter);
        // If token is generated, access protected APIs
      console.log(this.token);
        this.role=this.response.data.role;
        console.log(this.role);
        this.localStorageService.clear()
        this.localStorageService.setItem("user",true)
        if(this.role==="admin"){
          this.localStorageService.setItem("token", this.token);
          this.localStorageService.setItem("adminId", this.response.data.adminID);
          this.localStorageService.setItem("adminName", this.response.data.adminName);
          
          this.router.navigate(['/admin-dashboard/view-admin-dashboard']);
        }
        if(this.role==="seller"){
          this.localStorageService.setItem("token", this.token);
          this.localStorageService.setItem("sellerId", this.response.data.sellerId);
          this.localStorageService.setItem("sellerPhoneNumber", this.response.data.phoneNumber);
          this.router.navigate(['/seller-dashboard']);
        }
        if(this.role==="customer"){
          this.localStorageService.setItem("token", this.token);
          this.localStorageService.setItem("customerId", this.response.data.customerId);
          this.localStorageService.setItem("customerName", this.response.data.customerName);
          this.localStorageService.setItem("contactNumber", this.response.data.contactNumber);
          this.localStorageService.setItem("email", this.response.data.email);
          this.localStorageService.setItem("role", this.response.data.role);
          this.localStorageService.setItem("address", this.response.data.address);
          this.localStorageService.setItem("CartId", this.response.data.cartId);
          this.localStorageService.setItem("username", this.response.data.username);
          this.router.navigate(['/customer']);
          // this.router.navigate([{outlets:{customerOutlet:['/customer-main']}}]);
          // this.router.navigate([{ outlets: { customerOutlet: ['customer'] } }]);


        }
      
        // this.decodeTokenAndAccessAPI(this.token);
        // this.accessApi(this.token);
        // if (authRequest.username.startsWith('ADMIN_')){
        //   //redirect to admin page
        //   this.router.navigate(['/adminDashboard']);
        // }
        // if (authRequest.username.startsWith('SEL_')){
        //   //redirect to seller page
        // }
        // else{
        //   //redirect to customer page
        // }
      }
    },
    (error) => {
      // Handle error response from the server
      console.error("Error occurred:", error);
      if (error.status === 403) {
        // Unauthorized: Invalid credentials
        alert("Invalid credentials"); 
      } else {
        // Other errors
        alert("Error occurred while logging in. Please try again later.");
      }
    }
  );
}


// decodeTokenAndAccessAPI(token: any) {
//   const decodedToken = this.jwtHelper.decodeToken(token);
//   console.log(decodedToken); // Log decoded token to the console
//   // Access API using the decoded token
//   const adminid = decodedToken.adminID;
//   console.log("Admin ID:", adminid);
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   // console.log(decodedToken.getItem("role")); // Log decoded token to the console
//   this.accessApi(token);
  
// }
public accessApi(token:any){
  let responseBody =    this.jwtService.authorizationTest(token);

      console.log(responseBody )
  
  responseBody.subscribe( responseData => {
                           this.response = responseData;
                            console.log('responseData '+responseData)
                            } , error => {console.log('myerror '+error)});

  }



}



