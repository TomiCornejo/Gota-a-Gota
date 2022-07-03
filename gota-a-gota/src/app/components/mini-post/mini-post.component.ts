import { Component, Input, OnInit } from '@angular/core';
import { Foro } from 'src/app/models/foro.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.sass']
})
export class MiniPostComponent implements OnInit {

  @Input() foro:Foro;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.datosUsuario();
  }

  datosUsuario(){
    this.usuarioService.getID(this.foro.usuario).subscribe(data =>{
      this.foro.icono = data.icono;
      this.foro.nick = data.nombre;
    });
  }

  acotado(texto:string){
    return texto.substring(0,150);
  }

  redirec(){
    localStorage.setItem('post',JSON.stringify({"id":this.foro.id,"titulo":this.foro.titulo,"texto":this.foro.texto,"usuario":this.foro.nick,"img":this.foro.img}));
  }

}
