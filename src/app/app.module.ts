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

  ],
  imports: [
    BrowserModule,
    FormsModule
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
