import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../models/car';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cd-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;
  @Input() options: { edit: boolean } = { edit: true };

  @Output() edit: EventEmitter<any> = new EventEmitter();
  constructor(private sanitizer: DomSanitizer) { }

  getBackground(car: Car) {
    // tslint:disable-next-line:max-line-length
    return car ? this.sanitizer.bypassSecurityTrustStyle(`${car.color} url('assets/${car.thumbnail}') no-repeat center center / cover`) : '';
  }

  doEdit() {
    this.edit.emit(this.car);
  }
}
