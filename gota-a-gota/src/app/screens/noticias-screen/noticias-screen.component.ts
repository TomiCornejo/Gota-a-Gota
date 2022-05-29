import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.model';
import listaNoticias from 'src/assets/json/noticia.json';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.sass']
})
export class NoticiasScreenComponent implements OnInit {

  noticias:Noticia[] = listaNoticias;

  constructor() { }

  ngOnInit(): void {
  }

}