import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './component/container/client/client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PremengModule } from './primeng/premeng.module';
import { BooksComponent } from './component/pages/books/books.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { AboutComponent } from './component/pages/about/about.component';
import { BookComponent } from './component/book/book.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BookComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PremengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
