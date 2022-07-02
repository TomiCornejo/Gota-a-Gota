export class Usuario{
    nombre:string;
    clave:string;
    icono:string;
    admin:boolean;

    constructor(nombre:string,admin:boolean,clave:string,icono:string){
        this.nombre = nombre;
        this.clave = clave;
        this.admin = admin;
        this.icono = icono;
    }

}