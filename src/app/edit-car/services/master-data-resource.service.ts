import { Injectable } from '@angular/core';
import { StorageService } from 'ngx-webstorage/lib/core/interfaces/storageService';
import { DbService } from '../../core/db/db.service';
import { forkJoin, Observable, of } from 'rxjs';
import { Car } from '../../car-shared/models/car';
import { DB_KEYS } from '../../core/db/consts';
import { Engine } from '../../car-shared/models/engine';
import { Chassis } from '../../car-shared/models/chassis';
import { CarColor } from '../../car-shared/models/car-color';
import { CarBody } from '../../car-shared/models/car-body';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterDataResourceService {

  db: StorageService;

  constructor(db: DbService) {
    this.db = db.getDb();
  }

  getMasterData(): Observable<{ engines: Engine[], bodies: CarBody[], chassis: Chassis[], colors: CarColor[]}> {
    return forkJoin(
      this.getEngines(),
      this.getChassis(),
      this.getBodies(),
      this.getColors(),
    )
      .pipe(
        map(([engines, chassis, bodies, colors]) => ({ engines, chassis, bodies, colors})),
      );
  }

  private getEngines(): Observable<Engine[]> {
    const engines = this.db.retrieve(DB_KEYS.ENGINES);
    return of(engines);
  }

  private getChassis(): Observable<Chassis[]> {
    const chassis = this.db.retrieve(DB_KEYS.CHASSIS);
    return of(chassis);
  }

  private getBodies(): Observable<CarBody[]> {
    const bodies = this.db.retrieve(DB_KEYS.BODIES);
    return of(bodies);
  }

  private getColors(): Observable<CarColor[]> {
    const colors = this.db.retrieve(DB_KEYS.COLORS);
    return of(colors);
  }
}
