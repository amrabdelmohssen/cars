import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/features/landing-page/landing-page.component';
import { AllVehiclesComponent } from './components/features/all-vehicles/all-vehicles.component';
import { CarDetailsComponent } from './components/features/car-details/car-details.component';


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
    component : LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
