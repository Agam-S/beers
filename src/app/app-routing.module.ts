import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetAllBeersComponent } from './components/get-all-beers/get-all-beers.component';
import { SingleBeerComponent } from './components/single-beer/single-beer.component';

const routes: Routes = [
  { path: 'single', component: SingleBeerComponent },
  { path: 'all', component: GetAllBeersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
