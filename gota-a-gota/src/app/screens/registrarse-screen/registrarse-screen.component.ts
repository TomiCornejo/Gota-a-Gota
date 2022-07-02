import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.sass']
})
export class RegistrarseScreenComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      window.location.href="/inicio-screen";
    }
  }
}
