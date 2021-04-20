import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.shoppingCart.items;
  }

  total(): number{
    return this.shoppingCart.total();
  }

  clear() {
    this.shoppingCart.clear();
  }

  removeItem(item: any){
    this.shoppingCart.removeItem(item);
  }

  addItem(item: any){
    this.shoppingCart.addItem(item);
  }
}
