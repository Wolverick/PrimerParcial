import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu1 = "Hola mundo";
  menu2 = "Categorias"
  menu3 = "Marcas";
  menu4 = "Productos";

  sideMenu = [
    { name: "Inicio", link: "home" },
    { name: "Categorias", link: "categories" },
    { name: "Marcas", link: "trademarks" },
    { name: "Productos", link: "products" },
    { name: "Login", link: "singin" }
  ];
  navMenu =[
    { name: "Inicio", link: "home" },
    { name: "Categorias", link: "categories" },
    { name: "Marcas", link: "trademarks" },
    { name: "Productos", link: "products" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
