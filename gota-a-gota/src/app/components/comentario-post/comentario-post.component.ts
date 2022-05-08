import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario-post',
  templateUrl: './comentario-post.component.html',
  styleUrls: ['./comentario-post.component.sass']
})
export class ComentarioPostComponent implements OnInit {

  @Input() comentario:string;

  constructor() { }

  ngOnInit(): void {
  }

}
