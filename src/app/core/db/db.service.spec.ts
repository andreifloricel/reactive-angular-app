import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;
  let storageMock: any;
  beforeEach(() => {
    storageMock = jasmine.createSpyObj('storage', ['retrieve', 'store']);
    service = new DbService(storageMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if there\'s seed data on start' , () => {
    expect(storageMock.retrieve).toHaveBeenCalled();
  });

  it('should try to seed fresh data if none was present' , () => {
    storageMock.retrieve.and.returnValue(false);
    expect(storageMock.store).toHaveBeenCalled();
    expect(storageMock.store.calls.count()).toBe(6);
  });
});
