import { Engine } from '../../car-shared/models/engine';
import { Chassis } from '../../car-shared/models/chassis';
import { CarColor } from '../../car-shared/models/car-color';
import { CarBody } from '../../car-shared/models/car-body';

export interface MasterData {
  engines: Engine[];
  chassis: Chassis[];
  bodies: CarBody[];
  colors: CarColor[];
}
