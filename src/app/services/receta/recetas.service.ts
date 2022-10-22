import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class RecetasService{
    recetasUrl : string = '../assets/info/recetas.json';

    constructor(private httpClient:HttpClient) {
        /* this.recetas = [
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
        ]; */
    }

    /* cargarInsumos(): Observable<any> {
        return this.httpClient.get(this.insumosUrl);
    } */

    cargarRecetas(): Observable<any> {
        return this.httpClient.get(this.recetasUrl);
    }
}