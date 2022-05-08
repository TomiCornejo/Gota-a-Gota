import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { ForoScreenComponent } from './screens/foro-screen/foro-screen.component';
import { PlantaScreenComponent } from './screens/planta-screen/planta-screen.component';
import { SeguimientoScreenComponent } from './screens/seguimiento-screen/seguimiento-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { InfoRiegoScreenComponent } from './screens/info-riego-screen/info-riego-screen.component';
import { PostScreenComponent } from './screens/post-screen/post-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { TarjetaPlantaComponent } from './components/tarjeta-planta/tarjeta-planta.component';
import { CheckAguaComponent } from './components/check-agua/check-agua.component';
import { AgregarPlantaComponent } from './components/agregar-planta/agregar-planta.component';
import { TablaSeguimientoComponent } from './components/tabla-seguimiento/tabla-seguimiento.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { BotonPostComponent } from './components/boton-post/boton-post.component';
import { MiniPostComponent } from './components/mini-post/mini-post.component';
import { TituloPostComponent } from './components/titulo-post/titulo-post.component';
import { PostComponent } from './components/post/post.component';
import { BotonComentarioComponent } from './components/boton-comentario/boton-comentario.component';
import { ComentarioPostComponent } from './components/comentario-post/comentario-post.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ImagenPlantaComponent } from './components/imagen-planta/imagen-planta.component';
import { TablaRiegoComponent } from './components/tabla-riego/tabla-riego.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioScreenComponent,
    ForoScreenComponent,
    PlantaScreenComponent,
    SeguimientoScreenComponent,
    RegistrarseScreenComponent,
    IngresarScreenComponent,
    NoticiasScreenComponent,
    InfoRiegoScreenComponent,
    PostScreenComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    TarjetaPlantaComponent,
    CheckAguaComponent,
    AgregarPlantaComponent,
    TablaSeguimientoComponent,
    NoticiaComponent,
    BotonPostComponent,
    MiniPostComponent,
    TituloPostComponent,
    PostComponent,
    BotonComentarioComponent,
    ComentarioPostComponent,
    IngresarComponent,
    RegistrarseComponent,
    ImagenPlantaComponent,
    TablaRiegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
