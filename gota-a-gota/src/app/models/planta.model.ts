export class Planta{
    nombre:string;
    fruta:boolean;
    imagen:string;

    constructor(nombre:string,fruta:boolean,imagen:string){
        this.fruta = fruta;
        this.imagen = imagen;
        this.nombre = nombre;
    }
}