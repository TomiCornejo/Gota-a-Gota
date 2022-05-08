import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.sass']
})
export class MiniPostComponent implements OnInit {

  @Input() miniPost:Post;

  constructor() { }

  ngOnInit(): void {
  }

}
