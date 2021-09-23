import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  { path : '', component:CategoriesComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule
  ]
})
export class CategoriesModule { }
