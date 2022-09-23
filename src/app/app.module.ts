import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { HeaderComponent } from './components/header/header.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    HeaderComponent,
    PassRecoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
