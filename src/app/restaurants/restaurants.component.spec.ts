import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RestaurantsComponent} from './restaurants.component';
import {RestaurantsService} from './restaurants.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Restaurant } from './restaurant/restaurant.model';

let component: RestaurantsComponent;
let fixture: ComponentFixture<RestaurantsComponent>;
let service: RestaurantsService;
let http: HttpClient;
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
        HttpClientModule,
        HttpClientTestingModule,
        HttpClient
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    http = TestBed.inject(HttpClient);
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

  it('should get all restaurants', async (done: DoneFn) => {
    let listRestaurants: Restaurant[] = [];
    service = new RestaurantsService(http);

    await service.restaurants().subscribe(
      restaurants => {
        listRestaurants = restaurants;
        console.log(listRestaurants);
        console.log(mockDb);
      }
    );

    expect(listRestaurants).toEqual(mockDb);
  });

});
