// CORE FUNCTIONS
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController}from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

// MODELS
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

// SERVICES
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {

  const menuItem: MenuItem = {
    "id": "cup-cake",
    "imagePath": "assets/img/foods/cupcake.png",
    "name": "Cup Cake",
    "description": "Cup Cake recheado de Doce de Leite",
    "price": 8.7,
    "restaurantId": "bread-bakery"
  }

  const menuItem2: MenuItem = {
    "id": "donut",
    "imagePath": "assets/img/foods/donut.png",
    "name": "Donut",
    "description": "Coberto com chantilly",
    "price": 2.5,
    "restaurantId": "bread-bakery"
  }

  const cartItem: CartItem = new CartItem(menuItem);
  const cartItem2: CartItem = new CartItem(menuItem2);

  const listCartItem: CartItem[] = [
    cartItem,
    cartItem2
  ]

  const listCartItem2: CartItem[] = [
    cartItem
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService],
    });
  });

  // Use to test service and API
  it('should get an empty array data', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // check if the array cart starts empty
    expect(service.items).toEqual([]);
  });

  it('should add two items to shopping-cart', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(1);

    // add second item to shopping cart
    service.addItem(
      {
        "id": "donut",
        "imagePath": "assets/img/foods/donut.png",
        "name": "Donut",
        "description": "Coberto com chantilly",
        "price": 2.5,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(2);
  });

  it('should add the same item to shopping-cart', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(1);

    // add second item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(1);
  });

  it('should clear the shopping-cart', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(1);

    // add second item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );
    expect(service.items.length).toEqual(1);

    service.clear();

    expect(service.items).toEqual([]);
  });

  it('should return a total sum of value items price', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );

    // add second item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );

    expect(service.total()).toEqual(17.4);
  });

  it('should returned cartItems match with the mocked items', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );

    // add second item to shopping cart
    service.addItem(
      {
        "id": "donut",
        "imagePath": "assets/img/foods/donut.png",
        "name": "Donut",
        "description": "Coberto com chantilly",
        "price": 2.5,
        "restaurantId": "bread-bakery"
      }
    );

    expect(service.items).toEqual(listCartItem);
  });

  it('should delete cartItem stored', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    const service: ShoppingCartService =
      TestBed.inject(ShoppingCartService);

    // add first item to shopping cart
    service.addItem(
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      }
    );

    // add second item to shopping cart
    service.addItem(
      {
        "id": "donut",
        "imagePath": "assets/img/foods/donut.png",
        "name": "Donut",
        "description": "Coberto com chantilly",
        "price": 2.5,
        "restaurantId": "bread-bakery"
      }
    );

    service.removeItem(cartItem);

    expect(service.items.length).toEqual(1);
    expect(service.items).toEqual(listCartItem2);
  });

});
