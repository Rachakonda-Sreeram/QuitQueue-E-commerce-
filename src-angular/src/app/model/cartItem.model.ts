import { Product } from "./product.model";

export interface CartItem{
        cartitemId: number,
        itemQuantity:number,
        product:Product,
        cart: {
            cartId: number,
            totalPrice:number
        }
    
}