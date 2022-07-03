export class Foro{
    id:number;
    usuario:number;
    titulo:string;
    texto:string;
    img:string;

    nick:string;
    icono:string;

    constructor(titulo:string,texto:string,img:string = "",usuario:number = 0,id:number = 0,icono:string = "",nick:string = ""){
        this.titulo = titulo;
        this.texto = texto;
        this.img = img;
        this.id = id;
        this.usuario = usuario;
        this.icono = icono;
        this.nick = nick;
    }
}