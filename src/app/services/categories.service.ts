import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories =[
    {id:1,nombre:"Electrodomestico",descripcion:"Todos los electrodomesticos de la tienda"},
    {id:2,nombre:"Hogar",descripcion:"Todos los productos para el hogar de la tienda"},
    {id:3,nombre:"Tecnologia",descripcion:"Todos los productos de tecnologia de la tienda"}
  ]
  constructor() { }

  getCategories(){
    return this.categories;
  }
}
