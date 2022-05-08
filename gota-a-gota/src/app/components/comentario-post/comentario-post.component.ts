import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comentario-post',
  templateUrl: './comentario-post.component.html',
  styleUrls: ['./comentario-post.component.sass']
})
export class ComentarioPostComponent implements OnInit {

  @Input() comentario:string;
  @Input() pos:number;
  @Output() eliminarComentario = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(pos:number){
    this.eliminarComentario.emit(pos);
  }
}
