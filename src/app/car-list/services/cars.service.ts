import { Injectable } from "@angular/core";
import { CarsResourceService } from "./cars-resource.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Car } from "../../car-shared/models/car";

@Injectable()
export class CarsService {
  cars$: Observable<Car[]>;
  private carsSubject = new BehaviorSubject<Car[]>([]);

  private allCars: Car[] = [];

  constructor(private carsDB: CarsResourceService) {
    this.cars$ = this.carsSubject.asObservable();
    this.init();
  }

  init() {
    this.carsDB.getCars().subscribe(cars => {
      this.allCars = cars;
      this.carsSubject.next(this.allCars);
    });
  }

  search(val: string) {
    const result = this.allCars.filter(
      car => car.name.includes(val) || car.thumbnail.includes(val)
    );
    this.carsSubject.next(result);
  }

  clear() {
    this.carsSubject.next(this.allCars);
  }

  searchLucky(val: string) {
    this.carsDB.getCarsIfIAmLucky().subscribe(cars => {
      this.allCars = cars;
      this.carsSubject.next(this.allCars);
    });
  }
}
