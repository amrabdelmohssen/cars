import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { CarCard } from '../interfaces/car-card.interface';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
carId:string = ''
carDetails! : CarCard
  constructor(private activatedRout:ActivatedRoute , private carService:CarService , private router:Router) {
    activatedRout.paramMap.subscribe((params:any) => {
      debugger
     this.carId = params.params.id
    })
   }

  ngOnInit(): void {
    debugger
    this.carService.getCarById(this.carId).pipe(take(1),tap((res:CarCard)=> this.carDetails = res)).subscribe()
  }

  navigateToAnotherPage(path:string) : void {
    this.router.navigate([path])
  }

}
