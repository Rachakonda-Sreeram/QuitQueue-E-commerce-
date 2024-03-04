import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { addToCart, incrementProduct } from "./cart.action";
import * as CartActions from "./cart.action";



export interface CartState{
    products:Product[];
    // totalPrice?:number
}


 export const  initialCounterState :CartState={
    products:[]
 }

// export const counterReducer = createReducer(
//   {

export const  cartReducer = createReducer(
        initialCounterState, 
        on(CartActions.addToCart, (state,{product})=>{
            const updatedProduct=[...state.products, product];
            return{
                 ...state,
                 products:updatedProduct
            }
        }),
        on(CartActions.incrementProduct,(state,{productId})=>{
            console.log(state);
            console.log(productId);
            const updatedProducts=state.products.map((product)=>
            product.productId===productId
             ? {...product, stockQuantity:product.stockQuantity+1}
               :product
            );
            return{
               ...state,
               products:updatedProducts,
            };
        }),
        on(CartActions.decrementProduct,(state,{productId})=>{
            const updatedProducts=state.products.map((product)=>
            product.productId===productId
             ? {...product, stockQuantity:product.stockQuantity+1}
               :product
            );
            return{
               ...state,
               products:updatedProducts,
            };
        }),
        on(CartActions.removeItem,(state,{productId})=>{
            const updatedProducts=state.products.filter((product)=>
            product.productId!==productId
            );
            return {
                ...state,
                products:updatedProducts,
            };
        })
            
            
            
            
                //  )
                  
       
        

);

        