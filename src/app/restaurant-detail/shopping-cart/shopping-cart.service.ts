import { MenuItem } from "../menu-item/menu-item.model";
import {CartItem} from './cart-item.model';

export class ShoppingCartService {
  /*
    TODO: check that the cartItem list returned in
    the tests is the same cartItem list stored
  */

  items: CartItem[] = [];

  clear(){
    this.items = [];
  }

  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menu.id === item.id);
    if(foundItem){
      foundItem.quantity += 1;
    }else{
      this.items.push(new CartItem(item));
    }
  }

  // TODO : testing passing an cart item
  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

}
