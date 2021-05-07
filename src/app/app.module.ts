import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NoticesComponent } from './components/notices/notices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormContactComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    NoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
