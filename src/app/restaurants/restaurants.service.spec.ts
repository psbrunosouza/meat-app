// CORE FUNCTIONS
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController}
  from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

// MODELS
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { Reviews } from '../restaurant-detail/reviews/reviews.model';

// SERVICES
import {RestaurantsService} from './restaurants.service';

// API URL
import { MEAT_API } from '../app.api';

describe('RestaurantsService', () => {
  const restaurantList: Restaurant[] = [
    {
      id: 'bread-bakery',
      name: 'Bread & Bakery',
      category: 'Bakery',
      deliveryEstimate: '25m',
      rating: 4.9,
      imagePath: 'assets/img/restaurants/breadbakery.png',
      about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
      hours: 'Funciona de segunda à sexta, de 8h às 23h'
    }
  ];

  const restaurantMenu: MenuItem[] = [
    {
      "id": "cup-cake",
      "imagePath": "assets/img/foods/cupcake.png",
      "name": "Cup Cake",
      "description": "Cup Cake recheado de Doce de Leite",
      "price": 8.7,
      "restaurantId": "bread-bakery"
    },
    {
      "id": "donut",
      "imagePath": "assets/img/foods/donut.png",
      "name": "Donut",
      "description": "Coberto com chantilly",
      "price": 2.5,
      "restaurantId": "bread-bakery"
    },
    {
      "id": "bread",
      "imagePath": "assets/img/foods/bread.png",
      "name": "Pão Artesanal Italiano",
      "description": "Pão artesanal com queijos italianos",
      "price": 15.9,
      "restaurantId": "bread-bakery"
    },
  ]

  const restaurantReviews: Reviews[] = [
    {
      "name": "Julia",
      "date": "2017-01-23T18:25:43",
      "rating": 4.5,
      "comments": "Tudo muito bom, entrega no tempo certo",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Aline",
      "date": "2016-12-12T18:25:43",
      "rating": 3,
      "comments": "NÃO recomendo. O recheio é só um creme, não tem camarão e nem carne",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Renata",
      "date": "2016-12-12T18:25:43",
      "rating": 2,
      "comments": "Não foi muito agradável ao nosso paladar, e eu e meu esposo no outro dia passamos super mal. Pode até ter sido outra coisa, mas...",
      "restaurantId": "bread-bakery"
    },
    {
      "name": "Renata",
      "date": "2016-12-12T18:25:43",
      "rating": 5,
      "comments": "Nunca deixou na mão, comida sempre deliciosa.",
      "restaurantId": "bread-bakery"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsService],
    });
  });

  // Use to test service and API
  it('should get all restaurants', (done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    const service: RestaurantsService = TestBed.inject(RestaurantsService);
    service.restaurants().subscribe(
      restaurants => {
        expect(restaurants).toEqual(restaurantList);
        done();
      });
  });

  it('should get restaurant by id', (done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    const service: RestaurantsService = TestBed.inject(RestaurantsService);
    service.restaurantById('bread-bakery').subscribe(
      restaurant => {
        expect(restaurant).toEqual(restaurantList[0]);
        done();
      });
  });

  it('should get restaurant menu items by restaurant id', (done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    const service: RestaurantsService = TestBed.inject(RestaurantsService);
    service.menuOfRestaurants('bread-bakery').subscribe(
      menu => {
        expect(menu).toEqual(restaurantMenu);
        done();
      });
  });

  it('should get restaurant reviews by restaurant id', (done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    const service: RestaurantsService = TestBed.inject(RestaurantsService);
    service.reviewsOfRestaurants('bread-bakery').subscribe(
      reviews => {
        expect(reviews).toEqual(restaurantReviews);
        done();
      });
  });

  //Use this only for test Service, not API
  it('should get all restaurants with mocked body', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    const service = TestBed.inject(RestaurantsService);
    const httpMock = TestBed.inject(HttpTestingController);

    service.restaurants().subscribe(
      restaurants => {
        expect(restaurants).toEqual(restaurantList);
      });

    // Try to arrive to rote and return to request
    const req = httpMock.expectOne(`${MEAT_API}/restaurants`);
    // Expect that request should be a GET
    expect(req.request.method).toBe('GET');
    // Override body from request
    req.flush(restaurantList);
  });
});
