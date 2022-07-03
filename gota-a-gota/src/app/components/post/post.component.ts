import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  texto:string;
  img:string;

  constructor() { }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    let post = JSON.parse(localStorage.getItem('post') || "[]");
    this.texto = post.texto;
    this.img = post.img;
  }
}
