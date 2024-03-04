
import { Order } from "./order.model";
import { Product } from "./product.model";
import { Seller } from "./seller.model";

export interface OrderItem{

    orderItemId : number,
    product : Product,
    order: Order,
    seller: Seller,
    quantity: number,
    price: number,
    status: String,
statusDescription: String,
deliveryDate: Date




}