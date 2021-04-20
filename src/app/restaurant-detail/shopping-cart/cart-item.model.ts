import {MenuItem} from '../menu-item/menu-item.model';

export class CartItem {
  constructor(public menu: MenuItem, public quantity: number = 1){}

  value(): number{
    return this.quantity * this.menu.price;
  }
}
