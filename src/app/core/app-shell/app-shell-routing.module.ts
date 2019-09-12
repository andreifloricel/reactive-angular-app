import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cars',
    loadChildren: () => import('../../car-list/car-list.module').then(mod => mod.CarListModule),
  },
  {
    path: 'car',
    loadChildren: () => import('../../edit-car/edit-car.module').then(mod => mod.EditCarModule),
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule { }
