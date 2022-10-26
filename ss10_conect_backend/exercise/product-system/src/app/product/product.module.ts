import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';



@NgModule({
  declarations: [ ProductEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
