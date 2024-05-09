import { Component, OnInit } from '@angular/core';
import { CarCard, SystemType } from '../interfaces/car-card.interface';
import { CarService } from '../services/car.service';
import { pipe, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css'],
})
export class AllVehiclesComponent implements OnInit {
  carCard: CarCard = {
    id: 1,
    model: 'Audi R8',
    review: 4.6,
    price: 2100,
    isAirConditioning: true,
    doorsNumber: 4,
    passangersNumber: 2,
    transmission: SystemType.Auto,
    reviewCount: 1345,
    image: '../../assets/imges/card/car1.png',

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
  allCars: CarCard[] = [];
  carsPerPage: CarCard[] = [];

  constructor(private carsService: CarService, private router: Router) {}
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars(): void {
    this.carsService
      .getAllCars()
      .pipe(
        take(1),
        tap((res) => {
          this.allCars = res;
          this.carsPerPage = this.allCars.slice(0, 12);
        })
      )
      .subscribe();
  }
  navigateToHome(): void {
    this.router.navigateByUrl('/home');
  }

  displayItemAsperPagination(event: CarCard[]): void {
    this.carsPerPage = [...event];
  }
}
