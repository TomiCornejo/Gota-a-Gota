import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.sass']
})
export class PostScreenComponent implements OnInit {

  comentarios:string[] = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum?",];

  constructor() { }

  ngOnInit(): void {
  }

  modalComentario(comentario:string){
    this.comentarios.push(comentario);
  }

  eliminar(pos:number){
    this.comentarios.splice(pos,1);
  }

}
