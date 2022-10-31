import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryModule} from './category/category.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductRoutingModule,
    ProductModule,
    HttpClientModule,
    ReactiveFormsModule,
    CategoryModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
