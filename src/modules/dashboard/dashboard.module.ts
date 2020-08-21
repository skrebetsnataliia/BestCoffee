import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/header/header.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { LocationsModule } from '../locations/locations.module';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [HeaderComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocationsModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
