import {Minuta} from "./minuta.type"
import { RegimenService } from "../regimen/regimen.services";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MinutasService{
    minutas : Minuta[] = [];
    constructor(private regimenService:RegimenService){
        this.minutas = [
            {
                id: 1,
                nombreMinuta: 'Minuta 1',
                regimenes:regimenService.regimenes
            } as Minuta,
            {
                id: 2,
                nombreMinuta: 'Minuta 2',
                regimenes:regimenService.regimenes
            } as Minuta,
            {
                id: 3,
                nombreMinuta: 'Minuta 3',
                regimenes:regimenService.regimenes
            } as Minuta,
            {
                id: 4,
                nombreMinuta: 'Minuta 4',
                regimenes:regimenService.regimenes
            } as Minuta,
        ]
    }
}