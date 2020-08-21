import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SloganComponent } from 'src/components/slogan/slogan.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { Route, RouterModule } from '@angular/router';
import { InfoItemComponent } from 'src/components/info-item/info-item.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [SloganComponent, HomePageComponent, InfoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
