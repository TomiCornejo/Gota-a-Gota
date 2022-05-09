import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-comentario',
  templateUrl: './boton-comentario.component.html',
  styleUrls: ['./boton-comentario.component.sass']
})
export class BotonComentarioComponent implements OnInit {

  @Output() mandarComentario = new EventEmitter<string>();
  @Output() editarModal = new EventEmitter<any>();
  @Input() botonVerde:string = "Enviar";
  @Input() n:number;
  @Input() comentario:string="";
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarComentario(){
    if(this.botonVerde == "Enviar"){
      this.mandarComentario.emit(this.comentario);
      this.cancelar();
    }else{
      this.editarModal.emit([this.n,this.comentario]);
      this.cancelar();
    }
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
