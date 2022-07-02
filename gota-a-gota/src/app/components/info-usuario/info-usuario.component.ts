import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  type:string;

  constructor(private sanitizer: DomSanitizer,) { }

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

  editarInfo(verificar:boolean){
    if(verificar == true){
      alert("FUNCIONA");
    }else{
      alert("FUNCIONAN'T");
    }
  }

  cambioType(value:string){
    this.type = value;
  }

  cambioEdit(value:boolean){
    this.editFlag = value;
    this.admin2 = this.admin;
    this.usuario2 = this.usuario;
    this.icono2 = this.icono;
  }

  cambioAdmin(value:boolean){
    this.admin2 = value;
  }

  cerrarSesion(){
    sessionStorage.clear();
    window.location.href="/inicio-screen";
  }

  checkText(){
    if(this.usuario2 == ""){
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
