import { Component, OnInit, Output} from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';



@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent implements OnInit {
  nombre:string = '';
  clave1:string = '';
  clave2:string = '';
  img:string = '';
  imgFlag:boolean = false;

  constructor(private sanitizer: DomSanitizer,private usuarioService:UsuarioService,private formBuilder: FormBuilder) { }
  public aFormGroup: FormGroup;
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  siteKey:string = "6LfXtrsgAAAAAGEuFkZtx7afZeCSuPswXj_JEjRB"
  registrarUsuarios(){
    if(this.nombre == '' || this.clave1 == '' || this.clave2 == '' || this.img == ''){
      alert('Ingrese todos los datos');
    }else if(this.clave1 != this.clave2){
      alert('Contraseñas diferentes, intentalo de nuevo');
    }else{
      this.usuarioService.post(this.nombre,this.clave1,this.img).subscribe(data =>{
        console.log(data);
        sessionStorage.setItem('sitiomovil',JSON.stringify({"usuario":data.nombre,"icono":data.icono,"admin":false}));
        this.nombre = this.clave1 = this.clave2 = this.img = "";
        window.location.href="/inicio-screen";
      });
    }
  }
  
  captureFile(event:any){
    const img = event.target.files[0];
    this.extractBase64(img).then((image:any)=>{
      this.img = image.base;
    });
    this.imgFlag = true;
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
