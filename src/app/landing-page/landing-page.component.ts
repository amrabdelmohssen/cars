import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faLocationDot,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { CarCard, SystemType } from '../interfaces/car-card.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPage implements OnInit {
  constructor() {}
  carCard:CarCard = {
    name: 'Audi R8',
    review: 4.6,
    price: 2100,
    isAirConditioning: true,
    doorsNumber: 4,
    passangersNumber: 2,
    systemType: SystemType.Auto,
    reviewCount:1345,
    imagePath : '../../assets/imges/card/car1.png'

  };
  ngOnInit(): void {}
}
