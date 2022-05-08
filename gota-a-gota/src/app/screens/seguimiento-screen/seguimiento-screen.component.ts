import { Component, OnInit } from '@angular/core';
import { PlantaControl } from 'src/app/models/plantaControl.model';

@Component({
  selector: 'app-seguimiento-screen',
  templateUrl: './seguimiento-screen.component.html',
  styleUrls: ['./seguimiento-screen.component.sass']
})
export class SeguimientoScreenComponent implements OnInit {

  plantas:PlantaControl[] = [
    new PlantaControl('Zanahoria', 24),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  recibirPlanta(value:PlantaControl){
    this.plantas.push(value);
  }

}
