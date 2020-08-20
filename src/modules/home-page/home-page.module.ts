import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/header/header.component';
import { SloganComponent } from 'src/components/slogan/slogan.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [SloganComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
