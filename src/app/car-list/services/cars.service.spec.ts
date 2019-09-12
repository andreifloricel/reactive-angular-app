import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { NEVER } from 'rxjs';

describe('CarsService', () => {
  let service: CarsService;
  let mock;
  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['getCars']);
    mock.getCars.and.returnValue(NEVER);
    service = new CarsService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
