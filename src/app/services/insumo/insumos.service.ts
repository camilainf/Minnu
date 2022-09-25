import {Insumo} from "./insumo.type"
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class InsumosService{
    insumos : Insumo[] = [];
    constructor(){
        this.insumos = [
            {
                nombre: 'Acelga',
                gramos: 80,
            } as Insumo,
            {
                nombre: 'Repollo',
                gramos: 60,
            } as Insumo,
            {
                nombre: 'Zanahoria',
                gramos: 80,
            } as Insumo,
            {
                nombre: 'Tomate',
                gramos: 80,
            } as Insumo,
        ]
    }
}