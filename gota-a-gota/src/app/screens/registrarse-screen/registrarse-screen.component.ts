import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.sass']
})
export class RegistrarseScreenComponent implements OnInit {
  usuarios:Usuario[];

  constructor() { }

  ngOnInit(): void {
  }

  recibirUsuario(usuarios:Usuario[]){
    this.usuarios = usuarios;
  }

}
