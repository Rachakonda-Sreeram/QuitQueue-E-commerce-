import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/cartItem.model';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService,private localStorageService: LocalStorageService){
    
    // {
      //   name:"XAra jeans v",
      //   desc:"very expesnive",
      //   quant:3,
      //   price:50
      // },
      
    }
    img:"assets/jeans.jpg"
  items:CartItem[];
  grandTotal:number=0;
  title:string="Cart";
  newQuantities: number[] = [];
  
  ngOnInit() {
    this.getAllCartItems();
  }



  getAllCartItems():void {
      this.cartService.getAllCartItems().subscribe(items=>{
        this.items=items;
        this.grandTotal=items[0]?.cart.totalPrice;
        this.newQuantities=items.map(item=>item.itemQuantity)
        console.log(items);
        this.localStorageService.setItem('grandTotal',this.grandTotal);
        
      });
    }

    addProductToCart(productId: number, quantity: number){
      this.cartService.addProductToCustomerCart(productId, quantity).subscribe(result => {
        console.log(result);
        this.getAllCartItems();
      }, error => {
        this.getAllCartItems();
        console.error(error);
      });

      
    }

    deleteCartItem(id:number):void{
      this.cartService.deleteCartItem(id).subscribe(res=>{
        console.log(res);
        setTimeout(() => {
          this.getAllCartItems();
        }, 300);
        
      }, error => {
        this.getAllCartItems();
        console.error(error);
      })
    }
    //  return "";
  }
    //  return "";
  