import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CarListingDataSource, CarListingItem } from './car-listing-datasource';
import { Car } from '../../../car-shared/models/car';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cd-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss']
})
export class CarListingComponent implements AfterViewInit, OnInit {

  @Input() set cars(cars: Car[]) {
    setTimeout(() => {
      this.dataSource.setData(cars);
      this.lastUpdated = new Date();
    });
  }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<CarListingItem>;
  dataSource: CarListingDataSource;


  lastUpdated: Date;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'speed', 'handling', 'thumbnail'];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.dataSource = new CarListingDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getBackground(car: Car) {
    return this.sanitizer.bypassSecurityTrustStyle(`${car.color} url('assets/${car.thumbnail}') no-repeat center center / cover`);
  }
}
