import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RestaurantsComponent} from './restaurants.component';
import {RestaurantsService} from './restaurants.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';

let component: RestaurantsComponent;
let fixture: ComponentFixture<RestaurantsComponent>;
let mockDb: Restaurant[] = [
  {
    "id": "bread-bakery",
    "name": "Bread & Bakery",
    "category": "Bakery",
    "deliveryEstimate": "25m",
    "rating": 4.9,
    "imagePath": "assets/img/restaurants/breadbakery.png",
    "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
    "hours": "Funciona de segunda à sexta, de 8h às 23h"
  }
]

describe('RestaurantsComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RestaurantsComponent
      ],
      providers: [
        RestaurantsService,
      ],
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should get all restaurants', () => {
    let http = TestBed.inject(HttpTestingController);
    let service = TestBed.inject(RestaurantsService);
    let listRestaurants: Restaurant[] = [];

    service.restaurants().subscribe(
      restaurants => {
        listRestaurants = restaurants;
        console.log(listRestaurants);
        console.log(mockDb);
      }
    );

    // let request = http.expectOne({method: 'GET', url: `${MEAT_API}/restaurants`});
    // request.flush('Get')
    expect(listRestaurants).toEqual(mockDb);
  });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should get all restaurants', () => {
  //   let listRestaurants: Restaurant[] = [];
  //   service = new RestaurantsService(http);

  //   (done: DoneFn) => {
  //     service.restaurants().subscribe(
  //       restaurants => {
  //         expect(restaurants).toEqual(mockDb);
  //       }
  //     );
  //     done();
  //   }
  // });


});
