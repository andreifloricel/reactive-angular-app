import { CarsResourceService } from './cars-resource.service';
import { NEVER } from 'rxjs';

describe('CarsResourceService', () => {
  let service: CarsResourceService;
  let dbMock;
  beforeEach(() => {
    dbMock = jasmine.createSpyObj('dbMock', ['getDb']);
    dbMock.getDb.and.returnValue(NEVER);
    service = new CarsResourceService(dbMock);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
