
import { InsumosService } from "../insumo/insumos.service";
import { Injectable } from "@angular/core";
import { Regimen } from "./regimen.type";
import { RecetasService } from '../receta/recetas.service';
import { MenusService } from '../menu/menus.service';

@Injectable({
    providedIn: 'root'
})

export class RegimenService{
    regimenes: Regimen[] = [];
    constructor(private menuService: MenusService){
        this.regimenes = [
            {
                tipo: 'Liquido',
                almuerzo: menuService.menus[0],
                cena: menuService.menus[1],
            } as Regimen,
            {
                tipo: 'Comun',
                almuerzo: menuService.menus[1],
                cena: menuService.menus[2],
            } as Regimen,
            {
                tipo: 'Sin residuo',
                almuerzo: menuService.menus[3],
                cena: menuService.menus[2],
            } as Regimen,
            {
                tipo: 'Hiposodico',
                almuerzo: menuService.menus[0],
                cena: menuService.menus[3],
            } as Regimen,
        ]
    }
}
