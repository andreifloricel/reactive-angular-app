import { MasterDataResourceService } from './master-data-resource.service';
import { NEVER } from 'rxjs';

describe('MasterDataResourceService', () => {
  let service: MasterDataResourceService;
  let dbMock;
  beforeEach(() => {
    dbMock = jasmine.createSpyObj('dbMock', ['getDb']);
    dbMock.getDb.and.returnValue(NEVER);
    service = new MasterDataResourceService(dbMock);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
