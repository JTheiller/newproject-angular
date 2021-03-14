import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlexComponent } from './flex.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent, FlexComponent],
  bootstrap:    [ AppComponent ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule]
})
export class AppModule { }
