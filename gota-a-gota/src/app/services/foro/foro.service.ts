import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foro } from 'src/app/models/foro.model';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  url:string = "http://127.0.0.1:8000/api/foro/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    return this.http.get(this.url);
  }

  post(foro:Foro):Observable<any>{
    let value = {"titulo":foro.titulo,"texto":foro.texto,"img":foro.img,"usuario":foro.usuario}
    return this.http.post(this.url,value);
  }

  delete(i:number):Observable<any>{
    let url =  this.url + i;
    return this.http.delete(url);
  }

  put(foro:Foro):Observable<any>{
    let url =  this.url + foro.id;
    let value;
    if(foro.img == ""){
      value = {"titulo":foro.titulo,"texto":foro.texto,"usuario":foro.usuario}
    }else{
      value = {"titulo":foro.titulo,"texto":foro.texto,"img":foro.img,"usuario":foro.usuario}
    }
    return this.http.put(url,value);
  }

  get(i:number):Observable<any>{
    let url =  this.url + i;
    return this.http.get(url);
  }
}
