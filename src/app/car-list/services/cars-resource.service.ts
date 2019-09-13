import { Injectable } from "@angular/core";
import { DbService } from "../../core/db/db.service";
import { Observable, of, throwError } from "rxjs";
import { StorageService } from "ngx-webstorage/lib/core/interfaces/storageService";
import { DB_KEYS } from "../../core/db/consts";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarsResourceService {
  db: StorageService;

  constructor(db: DbService) {
    this.db = db.getDb();
  }

  getCars() {
    return of(this.db.retrieve(DB_KEYS.CARS_KEY)).pipe(
      map(cars =>
        cars.map(car => {
          car.thumbnail = car.body;
          return car;
        })
      )
    );
  }

  getCarsIfIAmLucky(): Observable<any> {
    console.log(`Luck checked on ${new Date()}`)
    return throwError("You are out of luck!");
  }
}
