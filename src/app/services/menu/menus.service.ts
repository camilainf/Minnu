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
                tipoRegimen: 'Almuerzo comun',
                ensalada: recetaService.recetas[0],
                platoDeFondo: recetaService.recetas[1],
                postre: recetaService.recetas[2]
            } as Menu,
            {   
                tipoRegimen: 'Cena comun',
                ensalada: recetaService.recetas[0],
                platoDeFondo: recetaService.recetas[1],
                postre: recetaService.recetas[2]
            } as Menu,
            {   
                tipoRegimen: 'Almuerzo Hiposodico',
                ensalada: recetaService.recetas[0],
                platoDeFondo: recetaService.recetas[1],
                postre: recetaService.recetas[2]
            } as Menu,
            {   
                tipoRegimen: 'Cena Hiposodico',
                ensalada: recetaService.recetas[0],
                platoDeFondo: recetaService.recetas[1],
                postre: recetaService.recetas[2]
            } as Menu
        ]
    }
}