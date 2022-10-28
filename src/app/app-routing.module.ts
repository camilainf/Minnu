import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MenusComponent } from './pages/menus/menus.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegimenesComponent } from './pages/regimenes/regimenes.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'inicio',component: InicioComponent},
  {path:'iniciosesion', component: InicioSesionComponent},
  {path:'passrecover', component: PassRecoverComponent},
  {path:'insumos', component: InsumosComponent},
  {path:'registro', component: RegistroComponent},
  {path:'menus',component: MenusComponent},
  {path:'recetas',component: RecetasComponent},
  {path:'regimenes',component: RegimenesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 