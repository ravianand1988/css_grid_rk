import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoModule } from 'src/demo/demo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSideBarComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,

    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
