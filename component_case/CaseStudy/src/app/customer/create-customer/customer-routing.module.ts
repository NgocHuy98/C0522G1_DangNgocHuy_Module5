import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from './create-customer.component';
import {EditCustomerComponent} from '../edit-customer/edit-customer.component';
const routes: Routes = [
  {
    path: 'create', component: CreateCustomerComponent
  },
  {
    path: 'edit', component: EditCustomerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
