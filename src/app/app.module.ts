import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { FullCarComponent } from './full-car/full-car.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    FullCarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/cars', component: CarsComponent, children: [{
          path: ':id', component: FullCarComponent
        }]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
