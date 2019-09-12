import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { MatToolbarModule } from '@angular/material';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    AppShellRoutingModule,
    MatToolbarModule,
  ],
  exports: [AppShellRoutingModule, DashboardComponent],
})
export class AppShellModule { }
