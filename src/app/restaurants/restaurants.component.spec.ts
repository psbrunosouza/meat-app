// import {RestaurantsComponent} from './restaurants.component';
// import {RestaurantsService} from './restaurants.service';
// import { Restaurant } from './restaurant/restaurant.model';
// import { TestBed } from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import { MEAT_API } from '../app.api';
// import {HttpClientModule} from '@angular/common/http';

// describe('RestaurantsComponent', () => {
//   const restaurantDummy: Restaurant[] = [
//     {
//       id: 'bread-bakery',
//       name: 'Bread & Bakery',
//       category: 'Bakery',
//       deliveryEstimate: '25m',
//       rating: 4.9,
//       imagePath: 'assets/img/restaurants/breadbakery.png',
//       about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
//       hours: 'Funciona de segunda à sexta, de 8h às 23h'
//     }
//   ];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [RestaurantsService],
//     });
//   });

//   // Use to test service and API
//   it('should get all restaurants', (done) => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//     });

//     const service: RestaurantsService = TestBed.inject(RestaurantsService);
//     service.restaurants().subscribe(
//       restaurants => {
//         expect(restaurants).toEqual(restaurantDummy);
//         done();
//       });
//   });

//   it('should get restaurant by id', (done) => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//     });

//     const service: RestaurantsService = TestBed.inject(RestaurantsService);
//     service.restaurantById('bread-bakery').subscribe(
//       restaurant => {
//         expect(restaurant).toEqual(restaurantDummy[0]);
//         done();
//       });
//   });

//   //Use this only for test Service, not API
//   it('should get all restaurants with mocked body', () => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });

//     const service = TestBed.inject(RestaurantsService);
//     const httpMock = TestBed.inject(HttpTestingController);

//     service.restaurants().subscribe(
//       restaurants => {
//         expect(restaurants).toEqual(restaurantDummy);
//       });

//     // Try to arrive to rote and return to request
//     const req = httpMock.expectOne(`${MEAT_API}/restaurants`);
//     // Expect that request should be a GET
//     expect(req.request.method).toBe('GET');
//     // Override body from request
//     req.flush(restaurantDummy);
//   });
// });
