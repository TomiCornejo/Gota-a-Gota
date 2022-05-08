import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass']
})
export class IngresarComponent implements OnInit {
  nombre:string='';
  clave:string='';

  constructor() { 
  }

  ingresarUsuario(){
    if(this.nombre!='' && this.clave!=''){
      alert('ingreso exitoso')
    }else{
      alert('ingrese todos los datos')
    }
  }


  ngOnInit(): void {
  }
}
