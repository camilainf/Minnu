import { Preparacion } from "./menu.type";
import { InsumosService } from "../insumo/insumos.service";
import { Injectable } from "@angular/core";
import { Menu } from "./menu.type";

@Injectable({
    providedIn: 'root'
})

export class MenusService{
    preparaciones : Preparacion[] = [];
    menus: Menu[] = [];
    constructor(private insumosService:InsumosService){
        this.preparaciones = [
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos: insumosService.insumos,
            } as Preparacion,
            {
                tipo: 'Plato de fondo',
                nombre: 'Lentejas con arroz',
                insumos: insumosService.insumos,
            } as Preparacion,
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos:insumosService.insumos,
            } as Preparacion,
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos:insumosService.insumos,
            } as Preparacion,
        ];

        this.menus = [
            {
                nombre: 'Almuerzo comun',
                raciones: 30,
                preparaciones: this.preparaciones, 
            } as Menu,
            {
                nombre: 'Cena _____comun',
                raciones: 20,
                preparaciones: this.preparaciones, 
            } as Menu,
            {
                nombre: 'Almuerzo Hiposodico',
                raciones: 120,
                preparaciones: this.preparaciones, 
            } as Menu,
            {
                nombre: 'Cena Hiposodico',
                raciones: 140,
                preparaciones: this.preparaciones, 
            } as Menu,
        ]
    }
}
