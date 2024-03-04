import { Order } from "./order.model";


export interface Payment extends Order{
    paymentId: number,
    order: Order,
    paymentDate: Date,
    amount: number,
    paymentMethod: String,
    paymentStatus: String
  }