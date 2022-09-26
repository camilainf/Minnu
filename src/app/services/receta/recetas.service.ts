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
                tipo: 'Postre',
                nombre: 'Jalea',
                insumos: insumosService.insumos,
            } as Receta,
            {
                tipo: 'Plato de fondo',
                nombre: 'Lentejas con arroz',
                insumos: insumosService.insumos,
            } as Receta,
            {
                tipo: 'Ensalada',
                nombre: 'Lechuga con zanahoria',
                insumos:insumosService.insumos,
            } as Receta,
            {
                tipo: 'Ensalada',
                nombre: 'Betarraga con cebolla',
                insumos:insumosService.insumos,
            } as Receta,
        ];
    }
}