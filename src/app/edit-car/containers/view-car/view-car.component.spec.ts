import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarComponent } from './view-car.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarService } from '../../services/car.service';
import { By } from '@angular/platform-browser';
import { mockCar } from '../../../car-shared/car/car.component.spec';

class MockCarService {
  car$ = new Subject();
  getCarByName = jasmine.createSpy();
}

const mockRoute: any = {
  params: new Subject(),
};

const mockRouter = jasmine.createSpyObj('router', ['navigate']);

@Component({
  selector: 'cd-car',
  template: '',
})
class MockCarComponent {
  @Input() car;
}

describe('ViewCarComponent', () => {
  let component: ViewCarComponent;
  let fixture: ComponentFixture<ViewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarComponent, MockCarComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: CarService, useClass: MockCarService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to edit car page when "edit" event is fired', () => {
    fixture.nativeElement.querySelector('cd-car').dispatchEvent(new CustomEvent('edit', {
      detail: { name: 'Space Tesla' }
    }));
    fixture.detectChanges();
    const router = TestBed.get(Router);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should pass the car from service to the cd-car', () => {
    const service = TestBed.get(CarService);
    service.car$.next(mockCar);
    fixture.detectChanges();

    const child = fixture.debugElement.query(By.css('cd-car'));
    expect(child.componentInstance.car).toEqual(mockCar);

  });

  it('should load the car by name', () => {
    const route = TestBed.get(ActivatedRoute);
    route.params.next({ name: 'bmw'});
    fixture.detectChanges();

    const service = TestBed.get(CarService);
    expect(service.getCarByName).toHaveBeenCalledWith('bmw');
  });
});
