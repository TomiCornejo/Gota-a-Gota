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
import { AgregarPlantaComponent } from './components/agregar-planta/agregar-planta.component';
import { SeguimientoScreensComponent } from './screens/seguimiento-screens/seguimiento-screens.component';
import { RegistrarseScreensComponent } from './screens/registrarse-screens/registrarse-screens.component';
import { PostScreensComponent } from './screens/post-screens/post-screens.component';
import { PlantaScreensComponent } from './screens/planta-screens/planta-screens.component';

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
    AgregarPlantaComponent,
    SeguimientoScreensComponent,
    RegistrarseScreensComponent,
    PostScreensComponent,
    PlantaScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
