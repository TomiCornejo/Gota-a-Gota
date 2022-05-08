import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-boton-post',
  templateUrl: './boton-post.component.html',
  styleUrls: ['./boton-post.component.sass']
})
export class BotonPostComponent implements OnInit {

  @Output() subirPost = new EventEmitter<Post>();

  titulo:string = '';
  descripcion:string = '';
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.titulo = this.descripcion = '';
  }

  publicar(){
    this.subirPost.emit(new Post(this.titulo,this.descripcion));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.titulo == '' || this.descripcion == ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
