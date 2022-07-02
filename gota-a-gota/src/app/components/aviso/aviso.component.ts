import { Component, OnInit} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.sass']
})
export class AvisoComponent implements OnInit {
  clave:string;
  checkFlag:boolean = false;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  checkText(){
    if(this.clave == ''){
      this.checkFlag = false;
    }else{
      this.checkFlag = true;
    }
  }

  cancel(){
    this.clave = '';
    this.checkFlag = false;
  }

  submit(){
    let user = JSON.parse(sessionStorage.getItem('sitiomovil') || "[]");
    this.usuarioService.get(user.usuario,this.clave).subscribe(data=>{
      if(data){
        this.usuarioService.delete(user.usuario,this.clave).subscribe(data=>{
          console.log(data);
          sessionStorage.clear();
          window.location.href="/inicio-screen";
        });
      }else{
        alert("Contrseña incorrecta: Permiso denegado");
      }
      this.cancel();
    });
  }
}
