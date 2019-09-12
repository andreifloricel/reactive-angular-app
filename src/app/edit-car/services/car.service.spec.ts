import { CarService } from './car.service';
import { NEVER } from 'rxjs';

describe('CarService', () => {
  let service: CarService;
  let masterDataMock;
  beforeEach(() => {
    masterDataMock = jasmine.createSpyObj('masterDataMock', ['getMasterData']);
    masterDataMock.getMasterData.and.returnValue(NEVER);
    service = new CarService(null, masterDataMock);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
