import {CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PressDirective } from './press.directive';
import { AnaSendDirective } from './ana-send.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PropertyForSaleComponent } from './property-for-sale/property-for-sale.component';




@NgModule({
  declarations: [
  AppComponent,
  PressDirective,
  AnaSendDirective,
  HeaderComponent,
  PropertyForSaleComponent,

  ],
  imports: [
    BrowserModule , BrowserAnimationsModule,FormsModule
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
