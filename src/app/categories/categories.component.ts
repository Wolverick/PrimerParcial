import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories : any [] = [];
  displayedColumns: string[] = ['id','nombre','descripcion'];
  constructor(private categorieService : CategoriesService) {
    this.getCategories();
   }

  ngOnInit(): void {
  }
  getCategories() {
    this.categories = this.categorieService.getCategories();
  }

}
