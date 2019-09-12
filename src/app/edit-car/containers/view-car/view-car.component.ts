import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { map } from 'rxjs/operators';
import { Car } from '../../../car-shared/models/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'cd-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.scss']
})
export class ViewCarComponent implements OnInit {

  car$: Observable<Car>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: CarService) { }

  ngOnInit() {

    this.car$ = this.service.car$;
    this.route.params
      .pipe(map(params => params.name))
      .subscribe(name => this.service.getCarByName(name));
  }

  edit(car: Car) {
    this.router.navigate(['car', 'edit', car.name]);
  }

}
