import { Injectable } from '@angular/core';
import { DbService } from '../../core/db/db.service';
import { Observable, of } from 'rxjs';
import { Car } from '../../car-shared/models/car';
import { StorageService } from 'ngx-webstorage/lib/core/interfaces/storageService';
import { DB_KEYS } from '../../core/db/consts';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarResourceService {

  db: StorageService;

  constructor(db: DbService) {
    this.db = db.getDb();
  }

  getCars() {
    return of(this.db.retrieve(DB_KEYS.CARS_KEY))
      .pipe(
        map(cars => cars.map(car => {
          car.thumbnail = car.body;
          return car;
        })),
      );
  }

  getCarByName(name): Observable<Car> {
    const cars = this.db.retrieve(DB_KEYS.CARS_KEY);
    const myCar = cars.find(car => car.name === name);
    if (!myCar) {
      return of(null);
    }
    return of({
      ...myCar,
      thumbnail: myCar.body,
    });
  }

  updateCar(name: string, updatedCar: Car): void {
    const cars = this.db.retrieve(DB_KEYS.CARS_KEY);
    for (const car of cars) {
      if (car.name === name) {
        Object.assign(car, updatedCar);
        this.db.store(DB_KEYS.CARS_KEY, cars);
        break;
      }
    }
  }
}
