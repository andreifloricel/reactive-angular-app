import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../../car-shared/models/car';
import { CarResourceService } from './car-resource.service';
import { tap } from 'rxjs/operators';
import { MasterData } from '../models/master-data';
import { MasterDataResourceService } from './master-data-resource.service';

@Injectable()
export class CarService {
  car$: Observable<Car>;
  masterData$: Observable<MasterData>;

  updates$: Observable<string>;

  private car: BehaviorSubject<Car> = new BehaviorSubject<Car>(null);
  private masterData: BehaviorSubject<MasterData> = new BehaviorSubject<MasterData>({ engines: [], bodies: [], chassis: [], colors: []});
  private updatesSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private carDB: CarResourceService, private masterDataDB: MasterDataResourceService) {
    this.car$ = this.car.asObservable();
    this.masterData$ = this.masterData.asObservable();
    this.updates$ = this.updatesSubject.asObservable();
    this.masterDataDB.getMasterData()
      .subscribe(masterData => this.masterData.next(masterData));
  }

  getCarByName(name: string) {
    if (name === 'new') {
      this.car.next({color: 'LightCoral', handling: 'BAD', speed: 3.5, thumbnail: 'basic.png', name: 'New Car' });
      return;
    }
    this.carDB.getCarByName(name)
      .subscribe(car => this.car.next(car));
  }

  changeCar(car: Car) {
    try {
      this.carDB.updateCar(car.name, car);
    } catch (e) {
      this.updatesSubject.next('ERROR');
    }
    this.updatesSubject.next('UPDATED');
  }
}
