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
                ensalada: recetaService.recetas[0],
                platoDeFondo: recetaService.recetas[0],
                postre: recetaService.recetas[0]
            } as Menu
        ]
    }
}