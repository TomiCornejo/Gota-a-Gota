import { Component, Input, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';

@Component({
  selector: 'app-tarjeta-planta',
  templateUrl: './tarjeta-planta.component.html',
  styleUrls: ['./tarjeta-planta.component.sass']
})
export class TarjetaPlantaComponent implements OnInit {

  @Input() planta:Planta;

  constructor() { }

  ngOnInit(): void {
  }

}
