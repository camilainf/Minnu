import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MenusComponent } from './pages/menus/menus.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const routes: Routes = [
  {path:'',component: InicioSesionComponent},
  {path:'inicio',component: InicioComponent},
  {path:'iniciosesion', component: InicioSesionComponent},
  {path:'passrecover', component: PassRecoverComponent},
  {path:'registro', component: RegistroComponent},
  {path:'menus',component: MenusComponent},
  {path:'recetas',component: RecetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
