import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/Beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  readonly baseUrl =
    'https://my-json-server.typicode.com/ubkychin/BeersJsonServer/Beers/';
  constructor(private _http: HttpClient) {}

  getAllBeers(): Observable<Beer[]> {
    return this._http.get<Beer[]>(this.baseUrl);
  }

  getSingleBeer(id: number): Observable<Beer> {
    const singleID = this.baseUrl + id;
    return this._http.get<Beer>(singleID);
  }
}
