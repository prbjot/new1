import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{mynew} from './mynew.component';
import { MycompoComponent } from './mycompo/mycompo.component';
import { Project2Component } from './project2/project2.component';
import {service} from './project2/project2.component';

@NgModule({
  declarations: [
    AppComponent,
	mynew,
	MycompoComponent,
	Project2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
