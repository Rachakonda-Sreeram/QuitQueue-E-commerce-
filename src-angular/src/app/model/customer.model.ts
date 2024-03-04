import { Order } from "./order.model";

export interface Customer {
    customerName: string;
    gender: string;
    contactNumber: string;
    email: string;
    username: string;
    password: string;
    role: string;
    address: {
      addressLine1: string;
      postalCode: number;
      city: string;
      state: string;
      country: string;
    };
    // order:Order;
  
  }