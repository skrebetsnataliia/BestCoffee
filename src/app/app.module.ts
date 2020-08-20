import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { LocationsComponent } from 'src/components/locations/locations.component';
import { LocationsModule } from 'src/modules/locations/locations.module';
import { HomePageModule } from 'src/modules/home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
