import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faLocationDot,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { CarCard, SystemType } from '../interfaces/car-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPage implements OnInit {
  constructor(private router:Router) {}
  carCard: CarCard = {
    id: 1,
    model: 'Audi R8',
    review: 4.6,
    price: 2100,
    isAirConditioning: true,
    doorsNumber: 4,
    passangersNumber: 2,
    reviewCount: 1345,
    image: '../../assets/imges/card/car1.png',
    transmission: SystemType.Auto,

    make: 'Nissan',
    year: 2020,
    color: 'Black',
    mileage: 22000,
    fuelType: 'Gasoline',
    engine: '2.5L 4-cylinder',
    horsepower: 188,
    features: [
      'Remote Start',
      'Automatic Emergency Braking',
      'Lane Keeping Assist',
    ],
    owners: 1,
  };

  ngOnInit(): void {}

  navigateToAllVehiclesPage(){
    this.router.navigate(['home/all-vehicles'])
  }
}
