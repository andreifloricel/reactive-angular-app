import { Pipe, PipeTransform } from '@angular/core';
import { MasterDataResourceService } from './master-data-resource.service';
import { Car } from '../../car-shared/models/car';
import { MasterData } from '../models/master-data';

@Pipe({
  name: 'carCost'
})
export class CarCostPipe implements PipeTransform {

  private masterData: MasterData;

  constructor(private service: MasterDataResourceService) {
    this.service.getMasterData()
      .subscribe(md => this.masterData = md);
  }

  transform(car: any): number {
    if (!car) {
      return null;
    }
    const engine = this.masterData.engines.find(eng => eng.speed === car.speed);
    const chassis = this.masterData.chassis.find(chs => chs.handling === car.handling);
    const body = this.masterData.bodies.find(b => b.type === car.thumbnail);

    const cost = (engine ? engine.cost : 0) +
      (chassis ? chassis.cost : 0) +
      (body ? body.cost : 0);
    return cost;
  }

}
