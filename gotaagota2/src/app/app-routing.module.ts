import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './screens/foro/foro.component';
import { InfoRiegoComponent } from './screens/info-riego/info-riego.component';
import { IngresarComponent } from './screens/ingresar/ingresar.component';
import { InicioComponent } from './screens/inicio/inicio.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { PlantaComponent } from './screens/planta/planta.component';
import { PostComponent } from './screens/post/post.component';
import { RegistrarseComponent } from './screens/registrarse/registrarse.component';
import { SeguimientoComponent } from './screens/seguimiento/seguimiento.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'planta', component:PlantaComponent},
  {path:'post', component:PostComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'ingresar', component:IngresarComponent},
  {path:'seguimiento', component:SeguimientoComponent},
  {path:'infoRiego', component:InfoRiegoComponent},
  {path:'foro', component:ForoComponent},
  {path:'noticias', component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
