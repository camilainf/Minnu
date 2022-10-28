import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { HeaderComponent } from './components/header/header.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { MenusComponent } from './pages/menus/menus.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegimenesComponent } from './pages/regimenes/regimenes.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    HeaderComponent,
    PassRecoverComponent,
    InsumosComponent,
    RegistroComponent,
    MenusComponent,
    RecetasComponent,
    RegimenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
