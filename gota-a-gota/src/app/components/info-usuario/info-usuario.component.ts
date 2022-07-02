import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.sass']
})
export class InfoUsuarioComponent implements OnInit {

  icono:string;
  usuario:string;
  admin:boolean;

  editFlag:boolean = false;
  sendflag:boolean = false;

  icono2:string;
  usuario2:string;
  admin2:boolean;
  clave1:string;
  clave2:string;
  edit:boolean;

  constructor(private sanitizer: DomSanitizer,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      let user = JSON.parse(datos || "[]");
      this.icono = "http://127.0.0.1:8000" + user.icono;
      this.usuario = user.usuario;
      this.admin = user.admin;
    }else{
      this.icono = this.usuario = "";
      this.admin = false;
    }
  }

  editarInfo(){
    if(this.icono2 == this.icono){
      this.icono2 = "";
    }
    this.usuarioService.put(this.usuario,this.clave1,this.usuario2,this.admin2,this.clave2,this.icono2).subscribe(data=>{
      if(!data){
        alert("Contrseña incorrecta: Permiso denegado");
      }else{
        sessionStorage.setItem('sitiomovil',JSON.stringify({"usuario":data.nombre,"icono":data.icono,"admin":data.admin}));
        this.usuario = data.usuario;
        this.admin = data.admin;
        this.icono = "http://127.0.0.1:8000" + data.icono;
      }
    });
    this.cambioEdit(false);
  }

  cambioType(value:boolean){
    this.edit = value;
  }

  cambioEdit(value:boolean){
    this.editFlag = value;
    this.admin2 = this.admin;
    this.usuario2 = this.usuario;
    this.icono2 = this.icono;
    this.clave2 = this.clave1 = "";
  }

  cambioAdmin(value:boolean){
    this.admin2 = value;
  }

  cerrarSesion(){
    sessionStorage.clear();
    window.location.href="/inicio-screen";
  }

  checkText(){
    if(this.usuario2 == "" || this.clave1 == ""){
      this.sendflag = false;
    }else{
      this.sendflag = true;
    }
  }

  captureFile(event:any){
    const img = event.target.files[0];
    this.extractBase64(img).then((image:any)=>{
      this.icono2 = image.base;
    });
  }

  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return reader.result;
    } catch (e) {
      return null;
    }
  });
}
