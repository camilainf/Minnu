
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
                nombre: 'Almuerzo comun',
                raciones: 30,
                menu: menuService.menus[0]
            } as Regimen,
            {
                nombre: 'Cena comun',
                raciones: 30,
                menu: menuService.menus[0]
            } as Regimen,
            {
                nombre: 'Almuerzo Hiposodico',
                raciones: 120,
                menu: menuService.menus[0]
            } as Regimen,
            {
                nombre: 'Cena Hiposodico',
                raciones: 140,
                menu: menuService.menus[0]
            } as Regimen,
        ]
    }
}
