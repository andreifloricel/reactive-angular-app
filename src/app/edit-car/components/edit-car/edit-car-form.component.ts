import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../../car-shared/models/car';
import { MasterData } from '../../models/master-data';

const defaultName = 'Unknown';

@Component({
  selector: 'cd-edit-car-form',
  templateUrl: './edit-car-form.component.html',
  styleUrls: ['./edit-car-form.component.scss']
})
export class EditCarFormComponent {

  @Input() set car(car: Car) {
    this.setCar(car);
  }

  @Input() masterData: MasterData;

  @Output() carChange: EventEmitter<Car> = new EventEmitter<Car>();

  carForm: FormGroup;

  currentCar: any = {
    name: defaultName,
  };

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      name: [defaultName, Validators.required],
      engine: [null, Validators.required],
      chassis: [null, Validators.required],
      body: ['Basic', Validators.required],
      color: ['Red', Validators.required],
    },
      {
        validators: this.validateCarCost.bind(this),
      });
    this.carForm.valueChanges.subscribe(car => {
      this.currentCar = {
        name: car.name,
        speed: car.engine,
        handling: car.chassis,
        thumbnail: car.body,
        color: car.color,
      };
    });
  }

  saveCar() {
    this.carChange.emit(this.currentCar);
  }

  private setCar(car: Car) {
    this.currentCar = car || this.currentCar;
    this.carForm.patchValue({
      name: car.name,
      engine: car.speed,
      chassis: car.handling,
      body: car.thumbnail,
      color: car.color,
    });
  }

  private validateCarCost(carForm: FormGroup) {
    if (!this.masterData) {
      return;
    }
    const car = carForm.getRawValue();

    const engine = this.masterData.engines.find(eng => eng.speed === car.engine);
    const chassis = this.masterData.chassis.find(chs => chs.handling === car.chassis);
    const body = this.masterData.bodies.find(b => b.type === car.body);
    const cost = (engine ? engine.cost : 0) +
      (chassis ? chassis.cost : 0) +
      (body ? body.cost : 0);

    if (cost > 10) {
      return {
        tooExpensive: 'Car is too expensive to design like this.',
      };
    }

  }
}
