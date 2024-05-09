import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { LandingPage } from './landing-page/landing-page.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {
    path : 'home/all-vehicles/car/:id',
    component : CarDetailsComponent
  },
  {
    path : 'home/all-vehicles',
    component : AllVehiclesComponent
  },
  {
    path : 'home',
    component : LandingPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
