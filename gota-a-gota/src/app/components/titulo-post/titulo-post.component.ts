import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-post',
  templateUrl: './titulo-post.component.html',
  styleUrls: ['./titulo-post.component.sass']
})
export class TituloPostComponent implements OnInit {

  titulo:string;
  usuario:string;

  constructor() { }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    let post = JSON.parse(localStorage.getItem('post') || "[]");
    this.titulo = post.titulo;
    this.usuario = post.usuario;
  }
}
