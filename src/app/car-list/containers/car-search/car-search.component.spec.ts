import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarSearchComponent } from './car-search.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Subject } from 'rxjs';
import { mockCars } from '../../components/car-listing/car-listing.component.spec';
import { By } from '@angular/platform-browser';

class MockService {
  cars$ = new Subject();
  search = jasmine.createSpy();
}

@Component({
  selector: 'cd-car-listing',
  template: ''
})
class MockCarListingComponent {
  @Input() cars;
}

describe('CarSearchComponent', () => {
  let component: CarSearchComponent;
  let fixture: ComponentFixture<CarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarSearchComponent, MockCarListingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: CarsService, useClass: MockService},
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    const service = TestBed.get(CarsService);
    expect(component).toBeTruthy();
  });

  it('should call search when the search box sends an event', () => {
    fixture.nativeElement.querySelector('cd-search-box').dispatchEvent(new CustomEvent('filterCars', {
      detail: 'volvo'
    }));

    fixture.detectChanges();
    const service = TestBed.get(CarsService);
    expect(service.search).toHaveBeenCalled();
  });

  it('should pass the cars from service to view components', async(() => {
    const service = TestBed.get(CarsService);
    service.cars$.next(mockCars);
    fixture.detectChanges();

    const child = fixture.debugElement.query(By.directive(MockCarListingComponent));
    expect(child.componentInstance.cars.length).toEqual(mockCars.length);
  }));
});
