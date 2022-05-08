import { Component, Input, OnInit } from '@angular/core';
import { PlantaControl } from 'src/app/models/plantaControl.model';

@Component({
  selector: 'app-tabla-seguimiento',
  templateUrl: './tabla-seguimiento.component.html',
  styleUrls: ['./tabla-seguimiento.component.sass']
})
export class TablaSeguimientoComponent implements OnInit {

  @Input() plantas:PlantaControl[];
  constructor() { }

  ngOnInit(): void {
  }

}
