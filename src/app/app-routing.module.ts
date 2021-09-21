import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { TrademarksComponent } from './trademarks/trademarks.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'home',component : HomeComponent},
  { path : 'categories',component : CategoriesComponent},
  { path : 'trademarks',component : TrademarksComponent},
  { path : 'products',component : ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
