import { Component, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';
import { ProductsListComponent } from 'src/app/products-list/products-list.component';
import { AboutComponent } from 'src/app/about/about.component';
import { BasketComponent } from 'src/app/basket/basket.component';



const routes: Routes=[
  {path:'', component: ProductsListComponent },
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'about',component:AboutComponent},
  {path: 'cart', component:BasketComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
