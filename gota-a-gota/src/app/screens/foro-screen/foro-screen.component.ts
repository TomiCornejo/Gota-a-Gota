import { Component, OnInit } from '@angular/core';
import { Foro } from 'src/app/models/foro.model';
import { ForoService } from 'src/app/services/foro/foro.service';

@Component({
  selector: 'app-foro-screen',
  templateUrl: './foro-screen.component.html',
  styleUrls: ['./foro-screen.component.sass']
})
export class ForoScreenComponent implements OnInit {

  foros:Foro[];

  constructor(private foroService:ForoService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.foroService.list().subscribe(data =>{
      this.foros = data;
    });
  }

  
  // modalPost(post:Post){
  //   this.posts.push(post);
  // }

}
