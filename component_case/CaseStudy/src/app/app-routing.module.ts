import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';
import {ContractModule} from './contract/contract.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {path: 'facility', loadChildren: () => FacilityModule},
  {path: 'customer', loadChildren: () => CustomerModule},
  {path: 'contract', loadChildren: () => ContractModule}
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
