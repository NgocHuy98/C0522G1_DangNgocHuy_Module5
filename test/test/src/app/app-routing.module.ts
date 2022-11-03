import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './customer/book-list/book-list.component';
import {BookCreateComponent} from './customer/book-create/book-create.component';
import {BookEditComponent} from './customer/book-edit/book-edit.component';



const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'create', component: BookCreateComponent},
  {path: 'edit/:id', component: BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
