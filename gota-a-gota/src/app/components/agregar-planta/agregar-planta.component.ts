import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlantaControl } from 'src/app/models/plantaControl.model';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.sass']
})
export class AgregarPlantaComponent implements OnInit {

  @Output() mandarPlantaControl = new EventEmitter<PlantaControl>();

  plantaSelecionada:string = "Planta";
  tiempo:number = 1;
  edad:number = 0;
  flag:boolean = false;

  plantas:string[] = [
    "Lechuga",
    "Manzana",
    "Pera",
    "Platano",
    "Tomate",
    "Zanahoria",
  ];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionPlanta(value:string){
    this.flag = true;
    this.plantaSelecionada = value;
  }

  seleccionTiempo(value:number){
    this.tiempo = value;
  }

  guardar(){
    this.mandarPlantaControl.emit(new PlantaControl(this.plantaSelecionada,this.edad,this.tiempo));
  }

  cancelar(){
    this.plantaSelecionada = "Planta";
    this.edad = 0;
    this.flag = false;
  }

}
