import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import listaPost from 'src/assets/json/post.json';

@Component({
  selector: 'app-foro-screen',
  templateUrl: './foro-screen.component.html',
  styleUrls: ['./foro-screen.component.sass']
})
export class ForoScreenComponent implements OnInit {

  posts:Post[] = listaPost;

  constructor() { }

  ngOnInit(): void {
  }

  modalPost(post:Post){
    this.posts.push(post);
  }

}
