import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './component/container/client/client.component';
import { BooksComponent } from './component/pages/books/books.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { HomeComponent } from './component/pages/home/home.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './component/container/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ManagerProductComponent } from './admin/pages/manager-product/manager-product.component';
import { ManagerCategoryComponent } from './admin/pages/manager-category/manager-category.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        title: 'home',
        component: HomeComponent,
      },
      {
        path: 'books',
        title: 'books',
        component: BooksComponent,
      },
      {
        path: 'about',
        title: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        title: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'admin',
    title: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ManagerProductComponent },
      { path: 'category', component: ManagerCategoryComponent },
    ],
  },
  {
    path: '**',
    title: 'Not found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
