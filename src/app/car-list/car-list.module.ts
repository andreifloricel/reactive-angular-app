import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
import { CarSearchComponent } from './containers/car-search/car-search.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CarListingComponent } from './components/car-listing/car-listing.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CarsService } from './services/cars.service';
import { MatInputModule } from '@angular/material';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CarSearchComponent, CarListingComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    CarListRoutingModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [CarsService],
})
export class CarListModule { }
