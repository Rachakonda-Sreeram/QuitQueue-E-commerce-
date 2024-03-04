
// import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './component/admin/admin.module';
// import { AddProductComponent } from './seller/add-product/add-product.component';
// import { ViewCategoriesComponent } from './seller/view-categories/view-categories.component';
// import { ViewOrdersComponent } from './seller/view-orders/view-orders.component';
// import { ViewPaymentsComponent } from './seller/view-payments/view-payments.component';
// import { ViewProductsComponent } from './seller/view-products/view-products.component';
// import { ViewSubCategoriesComponent } from './seller/view-sub-categories/view-sub-categories.component';
// import { SellerDashboardComponent } from './component/seller-dashboard/seller-dashboard.component';
import { CustomerMainComponent } from './component/customerDashboard/customer-main/customer-main.component';

import { CustomerHeaderComponent } from './component/customerDashboard/customer-header/customer-header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { OrderComponent } from './component/admin/order/order.component';
import { CustomerSideNavComponent } from './component/customerDashboard/customer-side-nav/customer-side-nav.component';
import { DashboardComponent } from './component/customerDashboard/dashboard/dashboard.component';
import { CartComponent } from './component/customerDashboard/cart/cart.component';
import { CardComponent } from './component/customerDashboard/helperComps/card/card.component';
import { ProductComponent } from './component/customerDashboard/product/product.component';
import { PageTitleComponent } from './component/customerDashboard/helperComps/page-title/page-title.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
// import { SellerComponent } from './component/sellerregistration/seller.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { counterReducer } from './component/customerDashboard/helperComps/counter/counter.reducer';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { SearchComponent } from './component/customerDashboard/search/search.component';
import { SellerModule } from './component/seller/seller/seller/seller.module';
import { SellerComponent } from './component/seller/seller/seller.component';
import { SellerDashboardComponent } from './component/seller/seller/Seller-Dashboard/seller-dashboard/seller-dashboard.component';
import { SellerHeaderComponent } from './component/seller/seller/Seller-Dashboard/seller-header/seller-header/seller-header.component';
import { CustomerProfileComponent } from './component/customerDashboard/customer-profile/customer-profile.component';
import { ViewProfileComponent } from './component/seller/seller/seller/view-profile/view-profile.component';
import { AboutUsComponent } from './component/customerDashboard/about-us/about-us.component';
import { ContactUsComponent } from './component/customerDashboard/contact-us/contact-us.component';
import { CheckoutComponent } from './component/customerDashboard/checkout/checkout.component';
import { OrderPlacedComponent } from './component/customerDashboard/order-placed/order-placed.component';
import { CustomerOrderComponent } from './component/customerDashboard/customer-order/customer-order.component';
import { ValidateOtpComponent } from './component/customerDashboard/validate-otp/validate-otp.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    // SellerComponent,
    LoginComponent,
    // AddProductComponent,
    // ViewCategoriesComponent,
    // ViewOrdersComponent,
    // ViewPaymentsComponent,
    // ViewProductsComponent,
    // ViewSubCategoriesComponent,
    // SellerDashboardComponent,
    CustomerMainComponent,
    CustomerSideNavComponent,
    // AddAdminComponent,
    // CategoryComponent,
    // OrderComponent,
    CustomerHeaderComponent,
    DashboardComponent,
    CartComponent,
    CardComponent,
    ProductComponent,
    PageTitleComponent,
    SearchComponent,
    CustomerProfileComponent,



    SellerComponent,
    SellerHeaderComponent,
    SellerDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    CheckoutComponent,
    OrderPlacedComponent,
    CustomerOrderComponent,
    ValidateOtpComponent,
 
    // ViewProfileComponent,


  //   AddAdminComponent,
  //   CategoryComponent,
    // OrderComponent,
  //   PaymentComponent,
  //   ProductComponent,
  //   SubcategoryComponent,
  //   ViewCustomersComponent,
  //   ViewSellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    SellerModule,
    RouterModule,
    // ImageSliderModule
    
    // StoreModule.forRoot({count: counterReducer}),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:4200'],
       
      },})
  
  ],
  providers: [
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
