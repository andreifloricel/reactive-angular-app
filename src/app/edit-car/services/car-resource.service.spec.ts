import { CarResourceService } from './car-resource.service';
import { DbService } from '../../core/db/db.service';
import { of } from 'rxjs';

describe('CarResourceService', () => {
  let service: CarResourceService;
  let db: any;

  beforeEach(() => {
    db = {
      retrieve: jasmine.createSpy(),
    };
    const dbService: any = {
      getDb() { return db; }
    };
    service = new CarResourceService(dbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCars', () => {
    it('should call "retrieve" on the db when we try to get the cars', () => {
      service.getCars();
      expect(db.retrieve).toHaveBeenCalled();
    });

    it('should create "thumbnail" property', () => {
      db.retrieve.and.returnValue([{ body: 'test.png' }]);
      service.getCars()
        .subscribe(cars => {
          expect(cars[0].thumbnail).toBeDefined();
        });
    });
  });

  describe('getCarByName', () => {
    //   --->>
    it('should call `retrieve` on the db when we get a car by name', () => {
      db.retrieve.and.returnValue([]);
      service.getCarByName('test');
      expect(db.retrieve).toHaveBeenCalledWith('CARS_KEY');
    });

    // ---<<
    it('should return null when car is not found', () => {
      db.retrieve.and.returnValue([{ name: 'golf' }, { name: 'e-tron' }]);
      service.getCarByName('cdk')
        .subscribe(car => expect(car).toBeNull());
    });

    it('should return the car with thumbnail prop when car is found', () => {
      db.retrieve.and.returnValue([{ name: 'bmw', body: 'image.png' }, { name: 'e-tron' }]);
      service.getCarByName('bmw')
        .subscribe(car => {
          expect(car).not.toBeNull();
          expect(car.name).toEqual('bmw');
          expect(car.thumbnail).toEqual('image.png');
        });
    });
  });
});
