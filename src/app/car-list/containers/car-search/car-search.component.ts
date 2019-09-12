import { Component, OnInit } from '@angular/core';
import { Car } from '../../../car-shared/models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'cd-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {
  cars: Car[];
  constructor(private service: CarsService) {}

  ngOnInit() {
    this.service.cars$.subscribe(cars => this.cars = cars);
  }

  filterCars(val: string) {
    this.service.search(val);
  }
}
