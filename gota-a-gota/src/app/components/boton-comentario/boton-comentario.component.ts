import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-comentario',
  templateUrl: './boton-comentario.component.html',
  styleUrls: ['./boton-comentario.component.sass']
})
export class BotonComentarioComponent implements OnInit {

  @Output() mandarComentario = new EventEmitter<string>();
  comentario:string="";
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarComentario(){
    this.mandarComentario.emit(this.comentario);
    this.cancelar();
  }

  cancelar(){
    this.comentario='';
  }

  revisarVacio(){
    if(this.comentario == ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
