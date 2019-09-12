import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarFormComponent } from './edit-car-form.component';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Pipe({
  name: 'carCost',
})
class MockCarCost implements PipeTransform {
  transform(val: any): any {
    return val;
  }
}

export const mockMasterData = {
  engines: [],
  chassis: [],
  bodies: [],
};

describe('EditCarComponent', () => {
  let component: EditCarFormComponent;
  let fixture: ComponentFixture<EditCarFormComponent>;

  beforeEach(async(() => TestBed.configureTestingModule({
      declarations: [ EditCarFormComponent, MockCarCost ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, NoopAnimationsModule],
    }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarFormComponent);
    component = fixture.componentInstance;
    component.masterData = mockMasterData as any;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
