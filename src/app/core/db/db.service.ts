import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { DB_KEYS } from './consts';
import { createMockData } from './create-mock-data';

@Injectable()
export class DbService {

  constructor(private storage: LocalStorageService) {
    this.initialize();
  }

  getDb() {
    return this.storage;
  }

  /**
   * Seed with dummy data so we can play with something when we first time run the app
   */
  private initialize() {
    if (!this.storage.retrieve(DB_KEYS.IS_SEEDED)) {
      const MOCK_DATA = createMockData();
      this.storage.store(DB_KEYS.CARS_KEY, MOCK_DATA.cars);
      this.storage.store(DB_KEYS.ENGINES, MOCK_DATA.engines);
      this.storage.store(DB_KEYS.BODIES, MOCK_DATA.bodies);
      this.storage.store(DB_KEYS.CHASSIS, MOCK_DATA.chassis);
      this.storage.store(DB_KEYS.COLORS, MOCK_DATA.colors);
      this.storage.store(DB_KEYS.IS_SEEDED, true);
    }
  }
}
