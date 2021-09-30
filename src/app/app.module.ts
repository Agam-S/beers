import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetAllBeersComponent } from './components/get-all-beers/get-all-beers.component';
import { BeerStructureComponent } from './components/beer-structure/beer-structure.component';
import { SingleBeerComponent } from './components/single-beer/single-beer.component';

@NgModule({
  declarations: [AppComponent, GetAllBeersComponent, BeerStructureComponent, SingleBeerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
