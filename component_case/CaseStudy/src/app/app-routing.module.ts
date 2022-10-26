import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
    {
    path: 'customer', component: ListCustomerComponent
  },
    {
    path: 'contract', component: ListContractComponent
  },
    {
    path: 'contract/create', component: CreateContractComponent
  },
    {
    path: 'facility', component: ListFacilityComponent
  },
    {
    path: 'facility/create', component: CreateFacilityComponent
  },
    {
    path: 'facility/edit', component: CreateFacilityComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
