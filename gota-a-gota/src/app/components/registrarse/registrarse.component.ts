import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent implements OnInit {
  nombre:string='';
  clave:string='';
  usuarios:Usuario[]=[];
  @Output() registrarUsuario = new EventEmitter <Usuario[]>();
  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuarios(){
    if(this.nombre!='' && this.clave!=''){
      this.usuarios.push(new Usuario(this.nombre,this.clave));
      this.registrarUsuario.emit(this.usuarios);
    }else{
      alert('ingrese todos los datos');
    }
    
  }

}
