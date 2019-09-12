import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCarRoutingModule } from './edit-car-routing.module';
import { EditCarFormComponent } from './components/edit-car/edit-car-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCarComponent } from './containers/view-car/view-car.component';
import { EditCarComponent } from './containers/edit-car/edit-car.component';
import { CarSharedModule } from '../car-shared/car-shared.module';
import { CarCostPipe } from './services/car-cost.pipe';
import { CarService } from './services/car.service';


@NgModule({
  declarations: [EditCarComponent, EditCarFormComponent, ViewCarComponent, CarCostPipe],
  imports: [
    CommonModule,
    EditCarRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    CarSharedModule
  ],
  providers: [CarService]
})
export class EditCarModule { }
