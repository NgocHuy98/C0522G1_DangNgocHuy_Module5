import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './nav/nav.component';
import { BookCreateComponent } from './customer/book-create/book-create.component';
import { BookEditComponent } from './customer/book-edit/book-edit.component';
import { BookListComponent } from './customer/book-list/book-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BookCreateComponent,
        BookEditComponent,
        BookListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
