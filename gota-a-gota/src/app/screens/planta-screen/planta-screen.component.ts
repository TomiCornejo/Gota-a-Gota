import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';
import { PlantaService } from 'src/app/services/planta/planta.service';

@Component({
  selector: 'app-planta-screen',
  templateUrl: './planta-screen.component.html',
  styleUrls: ['./planta-screen.component.sass']
})
export class PlantaScreenComponent implements OnInit {
  
  plantas:Planta[];
  tipo:string = "Fruta";
  poca:string;
  media:string;
  mucha:string;

  constructor(private plantaService:PlantaService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.plantaService.list().subscribe(data=>{
      this.plantas = data;
    });
  }

  revisarEsFruta(esFruta:boolean){
    if(esFruta){
      this.tipo = "Fruta";
    }else{
      this.tipo = "Verdura";
    }
  }

  revisarPocaAgua(esPoca:boolean){
    if(esPoca){
      this.poca = "poca agua";
    }else{
      this.poca = "";
    }
  }

  revisarMediaAgua(esMedia:boolean){
    if(esMedia){
      this.media = "media agua";
    }else{
      this.media = "";
    }
  }

  revisarMuchaAgua(esMucha:boolean){
    if(esMucha){
      this.mucha = "mucha agua";
    }else{
      this.mucha = "";
    }
  }

}
