import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCustomerComponent,
    ListFacilityComponent,
    NavComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
