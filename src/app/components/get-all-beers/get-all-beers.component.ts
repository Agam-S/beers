import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-get-all-beers',
  templateUrl: './get-all-beers.component.html',
  styleUrls: ['./get-all-beers.component.css'],
})
export class GetAllBeersComponent implements OnInit {
  beersList: Beer[];
  constructor(private _beerService: BeerService) {}

  ngOnInit() {
    this._beerService
      .getAllBeers()
      .subscribe((allBeers) => (this.beersList = allBeers));
  }
}
