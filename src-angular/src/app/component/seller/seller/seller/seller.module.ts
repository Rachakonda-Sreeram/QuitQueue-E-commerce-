import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './view-sub-categories/view-sub-categories.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ViewMyProductsComponent } from './view-my-products/view-my-products.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateOrderItemsComponent } from './update-order-items/update-order-items.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ViewCategoriesComponent,
    ViewSubCategoriesComponent,
    ViewOrdersComponent,
    ViewPaymentsComponent,
    ViewProfileComponent,
    ViewMyProductsComponent,
    UpdateOrderItemsComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SellerModule { }
