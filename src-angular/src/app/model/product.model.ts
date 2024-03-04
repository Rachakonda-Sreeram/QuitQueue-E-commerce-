import { Seller } from "./seller.model";
import { SubCategory } from "./subcategory.model";


export interface Product {
    productId: number;
    seller: Seller; 
    productName: string;
    productImageURL: string;
    description: string;
    price: number;
    stockQuantity: number;
    brand: string;
    subCategory: SubCategory;
  }