import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';
import { LandingPage } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarCardComponent } from './car-card/car-card.component';
import { FooterComponent } from './footer/footer.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CarsComponent,
    LandingPage,
    NavComponent,
    CarCardComponent,
    FooterComponent,
    AllVehiclesComponent,
    PaginationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
