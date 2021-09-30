import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css'],
})
export class SingleBeerComponent implements OnInit {
  singleBeer: Beer;
  @ViewChild('input') input: ElementRef;
  constructor(private _beerService: BeerService) {}

  ngOnInit(): void {}

  getSingleBeer(): void {
    const id = Number(this.input.nativeElement.value);
    this._beerService
      .getSingleBeer(id)
      .subscribe((beer) => (this.singleBeer = beer));
  }
}
