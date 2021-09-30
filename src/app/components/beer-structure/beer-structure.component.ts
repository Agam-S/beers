import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/Beer';

@Component({
  selector: 'app-beer-structure',
  templateUrl: './beer-structure.component.html',
  styleUrls: ['./beer-structure.component.css'],
})
export class BeerStructureComponent implements OnInit {
  @Input() beer: Beer;
  constructor() {}

  ngOnInit(): void {}
}
