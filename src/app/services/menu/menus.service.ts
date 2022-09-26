import { Injectable } from "@angular/core";
import { RecetasService } from '../receta/recetas.service';
import { Menu } from "./menu.type";

@Injectable({
    providedIn:'root'
})

export class MenusService{
    menus: Menu[] = [];
    constructor(private recetaService: RecetasService) {
        this.menus = [
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
        ]
    }
}