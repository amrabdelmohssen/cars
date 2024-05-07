import { Component, Input } from '@angular/core';
import { CarCard } from '../interfaces/car-card.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
@Input() carCard!:CarCard
}
