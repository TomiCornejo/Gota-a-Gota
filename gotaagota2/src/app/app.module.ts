import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './screens/inicio/inicio.component';
import { ForoComponent } from './screens/foro/foro.component';
import { PlantaComponent } from './screens/planta/planta.component';
import { PostComponent } from './screens/post/post.component';
import { InfoRiegoComponent } from './screens/info-riego/info-riego.component';
import { IngresarComponent } from './screens/ingresar/ingresar.component';
import { RegistrarseComponent } from './screens/registrarse/registrarse.component';
import { SeguimientoComponent } from './screens/seguimiento/seguimiento.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { TarjetaPlantaComponent } from './components/tarjeta-planta/tarjeta-planta.component';
import { CheckAguaComponent } from './components/check-agua/check-agua.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { ForoScreenComponent } from './screens/foro-screen/foro-screen.component';
import { InfoRiegoScreenComponent } from './screens/info-riego-screen/info-riego-screen.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ForoComponent,
    PlantaComponent,
    PostComponent,
    InfoRiegoComponent,
    IngresarComponent,
    RegistrarseComponent,
    SeguimientoComponent,
    CarruselComponent,
    TarjetaPlantaComponent,
    CheckAguaComponent,
    NoticiasComponent,
    ForoScreenComponent,
    InfoRiegoScreenComponent,
    IngresarScreenComponent,
    InicioScreenComponent,
    NoticiasScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
