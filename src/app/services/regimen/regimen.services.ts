
import { InsumosService } from "../insumo/insumos.service";
import { Injectable } from "@angular/core";
import { Regimen } from "./regimen.type";
import { RecetasService } from '../receta/recetas.service';

@Injectable({
    providedIn: 'root'
})

export class RegimenService{
    regimenes: Regimen[] = [];
    constructor(private recetasService: RecetasService){

        this.regimenes = [
            {
                nombre: 'Almuerzo comun',
                raciones: 30,
                recetas: recetasService.recetas
            } as Regimen,
            {
                nombre: 'Cena comun',
                raciones: 30,
                recetas: recetasService.recetas
            } as Regimen,
            {
                nombre: 'Almuerzo Hiposodico',
                raciones: 120,
                recetas: recetasService.recetas
            } as Regimen,
            {
                nombre: 'Cena Hiposodico',
                raciones: 140,
                recetas: recetasService.recetas
            } as Regimen,
        ]
    }
}
