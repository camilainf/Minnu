import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { HeaderComponent } from './components/header/header.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { MenusComponent } from './pages/menus/menus.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ModalEditarInsumoComponent } from './components/modales/modal-editar-insumo/modal-editar-insumo.component';
import { ModalEditarRecetaComponent } from './components/modales/modal-editar-receta/modal-editar-receta.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    HeaderComponent,
    PassRecoverComponent,
    RegistroComponent,
    MenusComponent,
    RecetasComponent,
    ModalEditarInsumoComponent,
    ModalEditarRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
