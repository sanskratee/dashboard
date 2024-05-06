import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCurdComponent } from './components/product-curd/product-curd.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCurdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
