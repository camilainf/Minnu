import { Injectable } from "@angular/core";
import { Receta } from './receta.type';
import { InsumosService } from '../../services/insumo/insumos.service';

@Injectable({
    providedIn:'root'
})

export class RecetasService{
    recetas : Receta[] = [];
    constructor(private insumosService: InsumosService) {
        this.recetas = [
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos: insumosService.insumos,
            } as Receta,
            {
                tipo: 'Plato de fondo',
                nombre: 'Lentejas con arroz',
                insumos: insumosService.insumos,
            } as Receta,
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos:insumosService.insumos,
            } as Receta,
            {
                tipo: 'Ensalada',
                nombre: 'BETARRAGA CEBOLLA',
                insumos:insumosService.insumos,
            } as Receta,
        ];
    }
}