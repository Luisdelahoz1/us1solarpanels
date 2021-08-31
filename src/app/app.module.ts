import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NoticesComponent } from './components/notices/notices.component';
import { CompanyComponent } from './components/company/company.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { MailchimpComponent } from './components/shared/mailchimp/mailchimp.component';
import { BlogComponent } from './components/blog/blog.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/shared/cards/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormContactComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    NoticesComponent,
    CompanyComponent,
    PageNotFoundComponent,
    CarouselComponent,
    MailchimpComponent,
    BlogComponent,
    EquipmentsComponent,
    ModalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent, ]

})
export class AppModule { }
export * from './components/shared/carousel/carousel.component';
