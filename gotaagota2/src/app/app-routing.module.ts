import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoScreenComponent } from './screens/foro-screen/foro-screen.component';
import { InfoRiegoScreenComponent } from './screens/info-riego-screen/info-riego-screen.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { PlantaScreensComponent } from './screens/planta-screens/planta-screens.component';
import { PostScreensComponent } from './screens/post-screens/post-screens.component';
import { RegistrarseScreensComponent } from './screens/registrarse-screens/registrarse-screens.component';
import { SeguimientoScreensComponent } from './screens/seguimiento-screens/seguimiento-screens.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio-screen', component:InicioScreenComponent},
  {path:'foro-screen', component:ForoScreenComponent},
  {path:'info-riego-screen', component:InfoRiegoScreenComponent},
  {path:'ingresar-screen', component:IngresarScreenComponent},
  {path:'noticias-screen', component:NoticiasScreenComponent},
  {path:'planta-screens', component:PlantaScreensComponent},
  {path:'post-screens', component:PostScreensComponent},
  {path:'registrarse-screens', component:RegistrarseScreensComponent},
  {path:'seguimiento-screens', component:SeguimientoScreensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
