import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoScreenComponent } from './screens/foro-screen/foro-screen.component';
import { InfoRiegoScreenComponent } from './screens/info-riego-screen/info-riego-screen.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { PlantaScreenComponent } from './screens/planta-screen/planta-screen.component';
import { PostScreenComponent } from './screens/post-screen/post-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
// import { SeguimientoScreenComponent } from './screens/seguimiento-screen/seguimiento-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio-screen', pathMatch:'full'},
  {path:'inicio-screen', component:InicioScreenComponent},
  {path:'foro-screen', component:ForoScreenComponent},
  {path:'info-riego-screen', component:InfoRiegoScreenComponent},
  {path:'ingresar-screen', component:IngresarScreenComponent},
  {path:'noticias-screen', component:NoticiasScreenComponent},
  {path:'planta-screen', component:PlantaScreenComponent},
  {path:'post-screen', component:PostScreenComponent},
  {path:'registrarse-screen', component:RegistrarseScreenComponent},
  // {path:'seguimiento-screen', component:SeguimientoScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
