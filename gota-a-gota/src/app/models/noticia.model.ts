export class Noticia{
    titular:string;
    imagen:string;
    enlace:string;

    constructor(titular:string,imagen:string, enlace:string){
        this.titular = titular;
        this.imagen = imagen;
        this.enlace = enlace;
    }
}