import { Injectable } from "@angular/core";
import { RecetasService } from '../receta/recetas.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class MenusService{
    menusUrl: string = '../assets/info/menus.json';
    constructor(private httpClient:HttpClient) {
        /* this.menus = [
            {   
                tipo: 'almuerzo',
                regimen: 'comun',
                raciones: 15,
                recetas: recetaService.recetas
            } as Menu,
            {   
                tipo: 'cena',
                regimen: 'vegetariano',
                raciones: 60,
                recetas: recetaService.recetas
            } as Menu,
            {   
                tipo: 'almuerzo',
                regimen: 'hiposodico',
                raciones: 20,
                recetas: recetaService.recetas
            } as Menu,
            {   
                tipo: 'cena',
                regimen: 'liquido',
                raciones: 45,
                recetas: recetaService.recetas
            } as Menu,
        ] */
    }

    cargarMenus(): Observable<any> {
        return this.httpClient.get(this.menusUrl);
    }
}