import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';

@Component({
  selector: 'app-planta-screen',
  templateUrl: './planta-screen.component.html',
  styleUrls: ['./planta-screen.component.sass']
})
export class PlantaScreenComponent implements OnInit {

  frutas:Planta[] = [
    new Planta("Manzana",true,"../../../assets/manzana.jpg"),
    new Planta("Pera",true,"../../../assets/peras.jpg"),
    new Planta("Platano",true,"../../../assets/platanos.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
