import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from 'src/app/models/planta.model';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  url:string = "http://127.0.0.1:8000/api/planta/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    return this.http.get(this.url);
  }

  post(planta:Planta):Observable<any>{
    let value = {"nombre":planta.nombre,"tipo":planta.tipo,"categoria":planta.categoria,"informacion":planta.informacion,"fuente":planta.fuente,"img":planta.img}
    return this.http.post(this.url,value);
  }

  delete(i:number):Observable<any>{
    let url =  this.url + i;
    return this.http.delete(url);
  }

  put(planta:Planta):Observable<any>{
    let url =  this.url + planta.id;
    let value;
    if(planta.img == ""){
      value = {"nombre":planta.nombre,"tipo":planta.tipo,"categoria":planta.categoria,"informacion":planta.informacion,"fuente":planta.fuente}
    }else{
      value = {"nombre":planta.nombre,"tipo":planta.tipo,"categoria":planta.categoria,"informacion":planta.informacion,"fuente":planta.fuente,"img":planta.img}
    }
    return this.http.put(url,value);
  }

  get(i:number):Observable<any>{
    let url =  this.url + i;
    return this.http.get(url);
  }
}
