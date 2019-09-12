import { CarCostPipe } from './car-cost.pipe';
import { of } from 'rxjs';

describe('CarCostPipe', () => {
  let pipe: CarCostPipe;
  let mockDB;
  beforeEach(() => {
    mockDB = jasmine.createSpyObj(['getMasterData']);
    mockDB.getMasterData.and.returnValue(of({ engines: [], chassis: [], bodies: []}));
    pipe = new CarCostPipe(mockDB);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
