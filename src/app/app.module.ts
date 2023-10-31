import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationSearchComponent } from './location-search/location-search.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SideBarAddsComponent } from './side-bar-adds/side-bar-adds.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    ForecastComponent,
    SideBarAddsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
