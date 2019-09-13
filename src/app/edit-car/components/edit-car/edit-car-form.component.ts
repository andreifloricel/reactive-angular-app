import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../../../car-shared/models/car";
import { MasterData } from "../../models/master-data";
import { CarService } from "../../services/car.service";
import { combineLatest, Observable } from "rxjs";
import { filter, map, scan } from "rxjs/operators";
import { Engine } from "../../../car-shared/models/engine";
import { Chassis } from "../../../car-shared/models/chassis";
import { CarBody } from "../../../car-shared/models/car-body";

const defaultName = "Unknown";

@Component({
  selector: "cd-edit-car-form",
  templateUrl: "./edit-car-form.component.html",
  styleUrls: ["./edit-car-form.component.scss"]
})
export class EditCarFormComponent {
  @Input() set car(car: Car) {
    this.setCar(car);
  }

  @Input() masterData: MasterData;

  @Output() carChange: EventEmitter<Car> = new EventEmitter<Car>();

  carForm: FormGroup;

  currentCar: any = {
    name: defaultName
  };

  currentCarCost$: Observable<number>;

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.carForm = this.buildForm();

    this.carForm.valueChanges.subscribe(car => {
      this.updateCurrentCarData({
        name: car.name,
        speed: car.engine,
        handling: car.chassis,
        thumbnail: car.body,
        color: car.color
      });
    });

    this.currentCarCost$ = this.carForm.valueChanges.pipe(
      map(carForm => [
        this.carService.getEngine(carForm.engine),
        this.carService.getChassis(carForm.chassis),
        this.carService.getBody(carForm.body)
      ]),
      map(carParts => carParts.map(carPart => (!!carPart ? carPart.cost : 0))),
      map(costs =>
        costs.reduce((totalCost, partCost) => totalCost + partCost, 0)
      )
    );
  }

  private updateCurrentCarData(car: Car) {
    this.currentCar = car;
  }

  calculateCarCost(car: Car) {
    if (!car) {
      return null;
    }
    const engine = this.carService.getEngine(car.speed);
    const chassis = this.carService.getChassis(car.handling);
    const body = this.carService.getBody(car.thumbnail);

    const cost =
      (engine ? engine.cost : 0) +
      (chassis ? chassis.cost : 0) +
      (body ? body.cost : 0);
    return cost;
  }

  /**************
   *
   *
   *
   *  IRELEVANT
   *
   * *******************/

  private buildForm() {
    return this.fb.group(
      {
        name: [defaultName, Validators.required],
        engine: [null, Validators.required],
        chassis: [null, Validators.required],
        body: ["Basic", Validators.required],
        color: ["Red", Validators.required]
      },
      {
        validators: this.validateCarCost.bind(this)
      }
    );
  }

  saveCar() {
    this.carChange.emit(this.currentCar);
  }

  private setCar(car: Car) {
    this.updateCurrentCarData(car || this.currentCar);
    this.carForm.setValue(
      {
        name: car.name,
        engine: car.speed,
        chassis: car.handling,
        body: car.thumbnail,
        color: car.color
      },
      { emitEvent: true }
    );
  }

  private validateCarCost(carForm: FormGroup) {
    if (!this.masterData) {
      return;
    }
    const car = carForm.getRawValue();

    const engine = this.masterData.engines.find(
      eng => eng.speed === car.engine
    );
    const chassis = this.masterData.chassis.find(
      chs => chs.handling === car.chassis
    );
    const body = this.masterData.bodies.find(b => b.type === car.body);
    const cost =
      (engine ? engine.cost : 0) +
      (chassis ? chassis.cost : 0) +
      (body ? body.cost : 0);

    if (cost > 10) {
      return {
        tooExpensive: "Car is too expensive to design like this."
      };
    }
  }
}
