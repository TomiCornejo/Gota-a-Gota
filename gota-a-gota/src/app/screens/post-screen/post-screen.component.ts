import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.sass']
})
export class PostScreenComponent implements OnInit {

  comentarios:string[] = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum?",];
  editado:string = "";
  n:number;
  botonVerde:string = "Enviar";

  constructor() { }

  ngOnInit(): void {
  }

  modalComentario(comentario:string){
    this.comentarios.push(comentario);
  }

  eliminar(pos:number){
    this.comentarios.splice(pos,1);
  }

  editar(pos:number){
    this.editado = this.comentarios[pos];
    this.n = pos;
    this.botonVerde = "Editar";
  }

  editarArray(datos:any[]){
    this.comentarios[datos[0]] = datos[1];
    this.editado = "";
    this.botonVerde = "Enviar";
  }

}
