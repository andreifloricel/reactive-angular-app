import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { Car } from '../models/car';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { emit } from 'cluster';

export const mockCar: Car = { name: 'Mr. Bean car', speed: 0, handling: 'bad', thumbnail: 'supercar.png', color: 'green' };
describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a car name', () => {
    component.car = mockCar;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-header').textContent).toContain('Bean');

  });

  it('should display the car name, handling and top speed', () => {
    component.car = mockCar;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-header').textContent).toContain('Bean');
    const divs = fixture.nativeElement.querySelectorAll('mat-card-content div');
    expect(divs[0].textContent).toContain(`Top speed: ${mockCar.speed}`);
    expect(divs[1].textContent).toContain(`Handling: ${mockCar.handling}`);
    const image: HTMLElement = document.querySelector('.image');
    expect(image.style.background).toContain(mockCar.thumbnail);
    expect(image.style.background).toContain(mockCar.color);
  });

  it('should have an Edit button', () => {
    component.car = mockCar;
    fixture.detectChanges();
    expect(document.querySelector('button')).toBeTruthy();
  });

  it('should hide the Edit button if we disable it in options', () => {
    component.car = mockCar;
    fixture.detectChanges();
    expect(document.querySelector('button')).toBeTruthy();
    component.options = {
      edit: false,
    };
    fixture.detectChanges();
    expect(document.querySelector('button')).toBeFalsy();
  });

  it('should emit the "edit" event when we click the button', () => {
    spyOn(component.edit, 'emit').and.callThrough();
    component.car = mockCar;
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(component.edit.emit).toHaveBeenCalled();
  });
});
