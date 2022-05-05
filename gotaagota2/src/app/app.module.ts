import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { TarjetaPlantaComponent } from './components/tarjeta-planta/tarjeta-planta.component';
import { CheckAguaComponent } from './components/check-agua/check-agua.component';
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
    CarruselComponent,
    TarjetaPlantaComponent,
    CheckAguaComponent,
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
