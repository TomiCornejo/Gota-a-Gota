import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';
import listaFrutas from 'src/assets/json/fruta.json';

@Component({
  selector: 'app-planta-screen',
  templateUrl: './planta-screen.component.html',
  styleUrls: ['./planta-screen.component.sass']
})
export class PlantaScreenComponent implements OnInit {
  esFruta:boolean = true;
  check:number[] = [1,2,3];

  frutas:Planta[] = listaFrutas;

  verduras:Planta[] = [
    new Planta("Lechuga","../../../assets/lechugas.jpg",1),
    new Planta("Tomate","../../../assets/tomate.jpg",2),
    new Planta("Zanahoria","../../../assets/zanahorias.jpg",3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  frutaOverdura(value:boolean){
    this.esFruta = value;
  }

  pocaAgua(value:boolean){
    if(value){
      this.check[0] = 1;
    }else{
      this.check[0] = -1;
    }
  }

  mediaAgua(value:boolean){
    if(value){
      this.check[1] = 2;
    }else{
      this.check[1] = -1;
    }
  }

  muchaAgua(value:boolean){
    if(value){
      this.check[2] = 3;
    }else{
      this.check[2] = -1;
    }
  }
}
