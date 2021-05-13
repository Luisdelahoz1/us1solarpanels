import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'notices',
    component: NoticesComponent
  },
  {
    path: 'equipments',
    component: EquipmentsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
