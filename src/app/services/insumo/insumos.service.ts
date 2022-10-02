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
                nombre: 'Acelga'
            } as Insumo,
            {
                nombre: 'Repollo'
            } as Insumo,
            {
                nombre: 'Zanahoria'
            } as Insumo,
            {
                nombre: 'Tomate'
            } as Insumo,
        ]
    }
}