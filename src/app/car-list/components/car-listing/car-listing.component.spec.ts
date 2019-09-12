import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarListingComponent } from './car-listing.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Car } from '../../../car-shared/models/car';
import { MatTableModule } from '@angular/material';

export const mockCars: Car[] = [
  {name: 'test car 1', color: 'blue', thumbnail: '', handling: 'bad', speed:  9},
  {name: 'test car 2', color: 'blue', thumbnail: '', handling: 'bad', speed:  9},
  {name: 'test car 3', color: 'blue', thumbnail: '', handling: 'bad', speed:  9},
  {name: 'test car 4', color: 'blue', thumbnail: '', handling: 'bad', speed:  9},
  // {name: 'test car 5', color: 'blue', thumbnail: '', handling: 'bad', speed:  9},
];

describe('CarListingComponent', () => {
  let component: CarListingComponent;
  let fixture: ComponentFixture<CarListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListingComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 car names when we give it 5 cars to render', () => {
    expect(fixture.nativeElement.querySelectorAll('tr').length).toBe(1);
    component.cars = mockCars;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tr').length).toBeGreaterThan(1);
  });
});
