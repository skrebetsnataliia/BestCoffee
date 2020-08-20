import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SloganComponent } from 'src/components/slogan/slogan.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: '',
        loadChildren: () =>
          import('src/modules/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'locations',
        loadChildren: () =>
          import('src/modules/locations/locations.module').then(
            (m) => m.LocationsModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
