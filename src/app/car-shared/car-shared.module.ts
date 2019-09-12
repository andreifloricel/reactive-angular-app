import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { MatButtonModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [CarComponent],
})
export class CarSharedModule { }
