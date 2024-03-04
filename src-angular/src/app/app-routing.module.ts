import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CustomerComponent } from './component/customer/customer.component';
// import { SellerComponent } from './component/sellerregistration/seller.component';
// import { AdminDashboardComponent } from './component/admin/view-admin-dashboard/admin-dashboard.component';

// import { CustomerDashboardComponent } from './component/customerDashboard/customer-dashboard/customer-dashboard.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { SubcategoryComponent } from './component/admin/subcategory/subcategory.component';
import { ViewCustomersComponent } from './component/admin/view-customers/view-customers.component';
import { ViewSellersComponent } from './component/admin/view-sellers/view-sellers.component';
// import { AddProductComponent } from './seller/add-product/add-product.component';
// import { ViewProductsComponent } from './seller/view-products/view-products.component';
// import { ViewCategoriesComponent } from './seller/view-categories/view-categories.component';
// import { ViewSubCategoriesComponent } from './seller/view-sub-categories/view-sub-categories.component';
// import { ViewOrdersComponent } from './seller/view-orders/view-orders.component';
// import { ViewPaymentsComponent } from './seller/view-payments/view-payments.component';
// import { SellerDashboardComponent } from './component/seller-dashboard/seller-dashboard.component';
import { CustomerMainComponent } from './component/customerDashboard/customer-main/customer-main.component';
import { DashboardComponent } from './component/customerDashboard/dashboard/dashboard.component';
import { CartComponent } from './component/customerDashboard/cart/cart.component';
import { ProductComponent } from './component/customerDashboard/product/product.component';
import { SearchComponent } from './component/customerDashboard/search/search.component';
import { AddAdminComponent } from './component/admin/add-admin/add-admin.component';
import { AdminDashboardComponent } from './component/admin/Admin Dashboard/admin-dashboard/admin-dashboard.component';
import { ViewAdminDashboardComponent } from './component/admin/view-admin-dashboard/view-admin-dashboard.component';
import { OrderComponent } from './component/admin/order/order.component';
import { PaymentComponent } from './component/admin/payment/payment.component';
import { ViewProductComponent } from './component/admin/view-product/view-product.component';
import { ViewAdminComponent } from './component/admin/view-admin/view-admin.component';
import { AddCategoryComponent } from './component/admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './component/admin/add-subcategory/add-subcategory.component';
import { SellerDashboardComponent } from './component/seller/seller/Seller-Dashboard/seller-dashboard/seller-dashboard.component';
import { SellerComponent } from './component/seller/seller/seller.component';
import { AddProductComponent } from './component/seller/seller/seller/add-product/add-product.component';
import { ViewCategoriesComponent } from './component/seller/seller/seller/view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './component/seller/seller/seller/view-sub-categories/view-sub-categories.component';
import { ViewOrdersComponent } from './component/seller/seller/seller/view-orders/view-orders.component';
import { ViewPaymentsComponent } from './component/seller/seller/seller/view-payments/view-payments.component';
import { CustomerProfileComponent } from './component/customerDashboard/customer-profile/customer-profile.component';
import { ViewProfileComponent } from './component/seller/seller/seller/view-profile/view-profile.component';
import { ViewMyProductsComponent } from './component/seller/seller/seller/view-my-products/view-my-products.component';
import { AboutUsComponent } from './component/customerDashboard/about-us/about-us.component';
import { ContactUsComponent } from './component/customerDashboard/contact-us/contact-us.component';
import { CheckoutComponent } from './component/customerDashboard/checkout/checkout.component';
import { CustomerOrderComponent } from './component/customerDashboard/customer-order/customer-order.component';
import { OrderPlacedComponent } from './component/customerDashboard/order-placed/order-placed.component';
import { ValidateOtpComponent } from './component/customerDashboard/validate-otp/validate-otp.component';
import { UpdateOrderItemsComponent } from './component/seller/seller/seller/update-order-items/update-order-items.component';
import { ViewOrderItemsComponent } from './component/admin/view-order-items/view-order-items.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'customerRegister',component:CustomerComponent},
  // {path:'sellerRegister',component:SellerComponent},
  // // {path:'adminDashboard',component:AdminDashboardComponent},
  // {path:'sellerDashboard',component:SellerDashboardComponent},
  {path:'customer',component:CustomerMainComponent, 
      children:[
        {path:'dashboard',component:DashboardComponent},
         {path:'cart',component:CartComponent},
         {path:'product',component:ProductComponent},
         {path:'searchResult',component:SearchComponent},
         {path:'view-profile',component:CustomerProfileComponent},
         {path:'about-us',component:AboutUsComponent},
         {path:'contact-us',component:ContactUsComponent},
         {path:'checkout',component:CheckoutComponent},
         {path:'validateOTP/:paymentType',component:ValidateOtpComponent},
         {path:'orderPlaced',component:OrderPlacedComponent},
         {path:'customerOrder',component:CustomerOrderComponent},
         { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]},
  // {path:'customer-Dashboard',component:DashboardComponent,outlet:'customerOutlet'},
  // {path:'customer-Cart',component:CartComponent,outlet:'customerOutlet'},
  // {path:'customerDashboard',component:CustomerDashboardComponent},
  // {path: 'adminDashboard', redirectTo: 'dashboard', pathMatch: 'full'}
  // {path:'admindashboard/categories',component:CategoryComponent},
  // {path:'admindashboard/subcategories',component:SubcategoryComponent},
  // {path:'admindashboard/customers',component:ViewCustomersComponent},
  // {path:'admindashboard/sellers',component:ViewSellersComponent},
  // {path:'sellerDashboard/add-products',component:AddProductComponent},
  // {path:'sellerDashboard/view-products',component:ViewProductsComponent},
  // {path:'sellerDashboard/view-categories',component:ViewCategoriesComponent},
  // {path:'sellerDashboard/view-sub-categories',component:ViewSubCategoriesComponent},
  // {path:'sellerDashboard/view-orders',component:ViewOrdersComponent},
  // {path:'sellerDashboard/view-payments',component:ViewPaymentsComponent},

  {path:'admin-dashboard', component: AdminDashboardComponent,
  children:[
    {path:'add-admin', component: AddAdminComponent},
  {path: 'categories', component:CategoryComponent},
  {path:'sub-categories',component: SubcategoryComponent},
  {path:'products',component: ViewProductComponent},
  {path:'sellers',component:ViewSellersComponent},
  {path:'customers',component:ViewCustomersComponent},
  {path:'orders',component:OrderComponent},
  {path:'payments',component:PaymentComponent},
  {path:'view-admin-dashboard',component:ViewAdminDashboardComponent},
  {path:'add-admin',component:AddAdminComponent},
  {path:'view-admin',component:ViewAdminComponent},
  {path:'categories/add-category',component:AddCategoryComponent},
  {path:'sub-categories/add-subcategory',component:AddSubcategoryComponent},
  {path:'orders/view-order-items/:orderId',component:ViewOrderItemsComponent}

  ]},

  {path:'seller-dashboard', component:SellerDashboardComponent},
  {path:'sellerRegister',component:SellerComponent},
    {path:'seller-dashboard/view-profile',component:ViewProfileComponent},
    {path:'seller-dashboard/add-products',component:AddProductComponent},
    {path:'seller-dashboard/view-categories',component:ViewCategoriesComponent},
    {path:'seller-dashboard/view-sub-categories',component:ViewSubCategoriesComponent},
    {path:'seller-dashboard/view-orders',component:ViewOrdersComponent},
    {path:'seller-dashboard/view-payments',component:ViewPaymentsComponent},
    {path:'seller-dashboard/view-My-Products',component:ViewMyProductsComponent},
    {path:'seller-dashboard/view-orders/update-order-items/:orderId',component:UpdateOrderItemsComponent}












  // {path:'seller-dashboard', component:SellerDashboardComponent},
  // {path: 'customerRegister',component:CustomerComponent},
  // {path:'sellerRegister',component:SellerComponent},
  // {path:'seller-dashboard/view-profile',component:ViewProfileComponent},
  // {path:'seller-dashboard/add-products',component:AddProductComponent},
  // {path:'seller-dashboard/view-categories',component:ViewCategoriesComponent},
  // {path:'seller-dashboard/view-sub-categories',component:ViewSubCategoriesComponent},
  // {path:'seller-dashboard/view-orders',component:ViewOrdersComponent},
  // {path:'seller-dashboard/view-payments',component:ViewPaymentsComponent},
  
  // {path:'admin-dashboard/categories/add-category',component:AddCategoryComponent},
  // {path:'admin-dashboard/categories/add-subcategory',component:AddSubcategoryComponent},
  // {path:'admin-dashboard/view-profile',component:ViewAdminComponent},
  // {path:'seller-dashboard/view-My-Products',component:ViewMyProductsComponent},
];
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
