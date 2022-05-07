import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.sass']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
