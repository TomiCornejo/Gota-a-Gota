export class Planta{
    id:number;
    nombre:string;
    tipo:string;
    categoria:string;
    informacion:string;
    fuente:string;
    img:string;

    constructor(nombre:string,tipo:string,categoria:string,informacion:string,fuente:string,img:string = "",id:number = 0){
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
        this.informacion = informacion;
        this.fuente = fuente;
        this.id = id;
        this.img = img;
    }
}