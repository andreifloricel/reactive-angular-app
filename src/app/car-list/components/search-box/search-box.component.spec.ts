import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a search value when we search for "red"', () => {
    spyOn(component.filterCars, 'emit').and.callThrough();
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Ioniq';
    input.dispatchEvent(new CustomEvent('search', { target: input } as any));
    fixture.detectChanges();

    expect(component.filterCars.emit).toHaveBeenCalled();
    expect(component.filterCars.emit).toHaveBeenCalledWith('Ioniq');

  });
});
