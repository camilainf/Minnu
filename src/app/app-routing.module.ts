import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { MinutasComponent } from './pages/minutas/minutas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'inicio',component: InicioComponent},
  {path:'iniciosesion', component: InicioSesionComponent},
  {path:'passrecover', component: PassRecoverComponent},
  {path:'minutas', component: MinutasComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'insumos', component: InsumosComponent},
  {path:'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 