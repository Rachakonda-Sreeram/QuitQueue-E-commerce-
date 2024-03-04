import { OrderItem } from "./OrderItem.model";
import { Payment } from "./payment.model";

export interface Order{
    orderId: number,
    orderDate: Date,
    totalAmount: number,
    orderItems:OrderItem[],
    }