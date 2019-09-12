import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCarComponent } from './containers/edit-car/edit-car.component';
import { ViewCarComponent } from './containers/view-car/view-car.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit/new',
    pathMatch: 'full',
  },
  {
    path: ':name',
    component: ViewCarComponent
  },
  {
    path: 'edit/:name',
    component: EditCarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCarRoutingModule { }
