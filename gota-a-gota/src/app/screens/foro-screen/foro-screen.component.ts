import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-foro-screen',
  templateUrl: './foro-screen.component.html',
  styleUrls: ['./foro-screen.component.sass']
})
export class ForoScreenComponent implements OnInit {

  posts:Post[] = [
    new Post ('Post de ejemplo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur, harum sequi nam ad incidunt expedita eos cumque est. Doloremque illo eligendi sed labore tenetur officiis culpa porro expedita quibusdam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus perspiciatis soluta, nesciunt autem provident iusto asperiores quas tenetur, minus et eligendi maiores cumque facere harum error aliquid voluptatem amet nemo.'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  modalPost(post:Post){
    this.posts.push(post);
  }

}
