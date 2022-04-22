import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { registerLocaleData } from '@angular/common';
import { SortByDatePipe } from './pipes/sortByDatepipe'
import { FilterByNamePipe } from './pipes/filterByName.pipe';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from './pipes/sortByNamepipe';
import { ProductsListComponent } from './products-list/products-list.component';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { BasketComponent } from './basket/basket.component';


registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    SortByDatePipe,
    SortByNamePipe,
    FilterByNamePipe,
    ProductsListComponent,
    ProductDetailComponent,
    AboutComponent,
    BasketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },
  ],
  bootstrap: [AppComponent],
  exports: [
    SortByDatePipe,
    SortByNamePipe,
    FilterByNamePipe
  ]
})
export class AppModule { }
