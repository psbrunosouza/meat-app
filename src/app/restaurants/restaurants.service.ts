import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

// import { ErrorHandler } from '../app.error-handler';

import { Restaurant } from './restaurant/restaurant.model';

import { MEAT_API } from '../app.api';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { Reviews } from '../restaurant-detail/reviews/reviews.model';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient){}

  restaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(
      retry(2)
    );
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`).pipe(
      retry(2)
    );
  }

  reviewsOfRestaurants(id: string): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(`${MEAT_API}/restaurants/${id}/reviews`).pipe(
      retry(2)
    );
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`).pipe(
      retry(2)
    );
  }
}
