import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';


@NgModule({
  declarations: [ListCustomerComponent, EditCustomerComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
