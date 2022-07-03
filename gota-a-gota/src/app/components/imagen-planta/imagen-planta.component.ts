import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-planta',
  templateUrl: './imagen-planta.component.html',
  styleUrls: ['./imagen-planta.component.sass']
})
export class ImagenPlantaComponent implements OnInit {

  @Input() nombre:string;
  @Input() img:string;

  constructor() { }

  ngOnInit(): void {
  }
}
