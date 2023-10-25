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
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './component/container/admin-layout/admin-layout.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { ManagerProductComponent } from './admin/pages/manager-product/manager-product.component';
import { ManagerCategoryComponent } from './admin/pages/manager-category/manager-category.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';

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
    ScrollToTopComponent,
    BreadcrumbComponent,
    AdminLayoutComponent,
    SideBarComponent,
    TopbarComponent,
    ManagerProductComponent,
    ManagerCategoryComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PremengModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
