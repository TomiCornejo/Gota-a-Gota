import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-agua',
  templateUrl: './check-agua.component.html',
  styleUrls: ['./check-agua.component.sass']
})
export class CheckAguaComponent implements OnInit {

  @Output() revisarEsFruta = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  esFruta(value:boolean){
    this.revisarEsFruta.emit(value);
  }

}
