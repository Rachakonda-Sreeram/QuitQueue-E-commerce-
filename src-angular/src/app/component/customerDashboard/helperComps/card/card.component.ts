import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../counter/counter.selector';
import { decrement, increment } from '../counter/counter.actions';
import { Product } from 'src/app/model/product.model';
import { addToCart } from '../cart/cart.action';
import { CardService } from 'src/app/service/card.service';
import { SubCategory } from 'src/app/model/subcategory.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  isAddedToCart: boolean = false;
showSecondDiv: any;

 @Input() product:Product;
 
    // title:string;
    // price:number;
    // desc:string;
    // productId:number;
    
    @Input() title: string;
    @Input() price: Number;
    @Input() desc: string;
    @Input() prodId: number;
    @Input() category:string;
    img:string;
    constructor(private cardService:CardService){
      console.log(this.category);
      
    }
    // img=`assets/${this.category}/`;
    // img=
  ngOnInit(): void {
    console.log(this.img);
    console.log(this.category);
    this.img=`assets/${this.category}/${Number(Math.random()*10+1).toFixed(0)}.jpg`;
    
  //  price:this.product.price;
  //  desc:this.product.description;
  //  productId:this.product.productId;
  }
  toggleDivs() {
    this.showSecondDiv = true;
  }

  addToCart(productId:number) {
        this.isAddedToCart = true;
        this.cardService.addToCart(productId).subscribe()
        }

      }

