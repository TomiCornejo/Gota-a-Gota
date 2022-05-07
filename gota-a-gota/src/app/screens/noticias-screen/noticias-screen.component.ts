import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.model';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.sass']
})
export class NoticiasScreenComponent implements OnInit {

  noticias:Noticia[] = [
    new Noticia('Las algas tóxicas asolaron a la sociedad maya','https://www.investigacionyciencia.es/images/63425/articleImage-big.jpg','https://www.investigacionyciencia.es/noticias/las-algas-txicas-asolaron-a-la-sociedad-maya-20816'),
    new Noticia('La botánica es el nuevo ‘rock and roll’”','https://imagenes.elpais.com/resizer/as2fvLXYXyh71dIYSKLaPYOcp1w=/1960x0/filters:focal(848x796:858x806)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/22MDDJUX7NA3VJSVMCKBUIYI7Y.jpg','https://elpais.com/eps/2021-12-08/la-botanica-es-el-nuevo-rock-and-roll.html'),
    new Noticia('¿podar o no podar?','https://imagenes.elpais.com/resizer/QvvsVDs5laezDOVu2sImXUPv92k=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PSWNHJ2X2ZAHFAEABHYDYTEIKU.jpg','https://elpais.com/espana/madrid/2022-01-09/plantas-podar-o-no-podar.html'),
    new Noticia('Las plantas carnívoras también se pueden anestesiar','https://www.investigacionyciencia.es/images/63219/articleImage-full.jpg', 'https://www.investigacionyciencia.es/noticias/las-plantas-carnvoras-tambin-se-pueden-anestesiar-20750'),
    new Noticia('Flores adaptadas a los colibríes, pero no a los abejorros','https://www.investigacionyciencia.es/images/59150/articleImage-full.jpg','https://www.investigacionyciencia.es/noticias/flores-adaptadas-a-los-colibres-pero-no-a-los-abejorros-19789'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}