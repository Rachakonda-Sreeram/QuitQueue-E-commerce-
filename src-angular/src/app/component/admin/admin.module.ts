import { NgModule } from "@angular/core";
import { SubcategoryComponent } from "./subcategory/subcategory.component";
import { ViewCustomersComponent } from "./view-customers/view-customers.component";
import { ViewSellersComponent } from "./view-sellers/view-sellers.component";
import { CommonModule } from "@angular/common";
import { AddAdminComponent } from "./add-admin/add-admin.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddCategoryComponent } from './add-category/add-category.component';
// import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { ViewAdminDashboardComponent } from './view-admin-dashboard/view-admin-dashboard.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AdminDashboardComponent } from './Admin Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './Admin Dashboard/admin-header/admin-header.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CategoryComponent } from "./category/category.component";
import { OrderComponent } from "./order/order.component";
import { PaymentComponent } from "./payment/payment.component";
import { ViewOrderItemsComponent } from './view-order-items/view-order-items.component';




@NgModule({
  declarations: [AddAdminComponent, CategoryComponent, SubcategoryComponent, ViewProductComponent, ViewSellersComponent, ViewCustomersComponent, OrderComponent, PaymentComponent, AddCategoryComponent,  AddSubcategoryComponent, ViewAdminDashboardComponent, ViewAdminComponent, AdminDashboardComponent, AdminHeaderComponent, ViewProductComponent, ViewOrderItemsComponent],
  imports: [
    CommonModule,FormsModule,RouterModule
  ]
})
export class AdminModule { }