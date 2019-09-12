import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { filter, map, partition } from 'rxjs/operators';
import { from, merge, Observable } from 'rxjs';
import { Car } from '../../../car-shared/models/car';
import { MasterData } from '../../models/master-data';

@Component({
  selector: 'cd-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  car$: Observable<Car>;
  masterData$: Observable<MasterData>;
  constructor(private route: ActivatedRoute,
              private service: CarService) { }

  ngOnInit() {
    this.car$ = this.service.car$;
    this.masterData$ = this.service.masterData$;

    this.service.updates$.subscribe(update => this.notify(update));

    this.route.params
      .pipe(
        map(params => params.name)
      )
      .subscribe(name => this.service.getCarByName(name));
  }

  carChange(car: Car) {
    this.service.changeCar(car);

  }

  private notify(update) {
    if (update === 'UPDATED') {
      alert('The car is updated.');
    } else if (update === 'SAVED') {
      alert('The car is saved, reloading...');
    } else if (update === 'ERROR') {
      alert('Error updating car.');
    }
  }
}
