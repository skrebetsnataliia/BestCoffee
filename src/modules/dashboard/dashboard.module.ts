import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/header/header.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { HomePageModule } from '../home-page/home-page.module';
import { LocationsModule } from '../locations/locations.module';



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
    LocationsModule
  ]
})
export class DashboardModule { }
