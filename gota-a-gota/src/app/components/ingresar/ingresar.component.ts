import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass']
})
export class IngresarComponent implements OnInit {
  nombre:string='';
  clave:string='';

  constructor(private usuarioService:UsuarioService) { 
  }

  ingresarUsuario(){
    if(this.nombre == '' || this.clave == ''){
      alert('ingrese todos los datos');
      this.nombre = this.clave = '';
    }else{
      this.usuarioService.get(this.nombre,this.clave).subscribe(data=>{
        if(data){
          sessionStorage.setItem('sitiomovil',JSON.stringify({"usuario":data.nombre,"icono":data.icono,"admin":data.admin}));
          this.nombre = this.clave = "";
          window.location.href="/inicio-screen";
        }else{
          alert("El nombre de usuario o contraseña no corresponden");
        }
      });
    }
  }


  ngOnInit(): void {
  }
}
