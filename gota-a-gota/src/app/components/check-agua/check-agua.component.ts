import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-agua',
  templateUrl: './check-agua.component.html',
  styleUrls: ['./check-agua.component.sass']
})
export class CheckAguaComponent implements OnInit {

  @Output() revisarEsFruta = new EventEmitter<boolean>();
  @Output() revisarPocaAgua = new EventEmitter<boolean>();
  @Output() revisarMediaAgua = new EventEmitter<boolean>();
  @Output() revisarMuchaAgua = new EventEmitter<boolean>();

  varPocaAgua:boolean = true;
  varMediaAgua:boolean = true;
  varMuchaAgua:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  esFruta(value:boolean){
    this.revisarEsFruta.emit(value);
  }

  check(value:boolean){
    if(value){
      value = false;
    }else{
      value = true;
    }
    return value;
  }

  pocaAgua(){
    this.varPocaAgua = this.check(this.varPocaAgua);
    this.revisarPocaAgua.emit(this.varPocaAgua);
  }

  mediaAgua(){
    this.varMediaAgua = this.check(this.varMediaAgua);
    this.revisarMediaAgua.emit(this.varMediaAgua);
  }

  muchaAgua(){
    this.varMuchaAgua = this.check(this.varMuchaAgua);
    this.revisarMuchaAgua.emit(this.varMuchaAgua);
  }
}