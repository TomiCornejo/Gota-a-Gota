import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-riego-screen',
  templateUrl: './info-riego-screen.component.html',
  styleUrls: ['./info-riego-screen.component.sass']
})
export class InfoRiegoScreenComponent implements OnInit {
  
  nombre:string;
  img:string;

  informacion:string;
  fuente:string;

  constructor() { }

  ngOnInit(): void {
    let plantita = JSON.parse(localStorage.getItem('plantita') || "[]");
    this.nombre = plantita.nombre;
    this.img = plantita.img;
    this.informacion = plantita.informacion;
    this.fuente = plantita.fuente;
  }

}
