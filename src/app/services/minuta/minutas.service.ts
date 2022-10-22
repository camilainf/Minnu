import {Minuta} from "./minuta.type"
import { RegimenService } from "../regimen/regimen.services";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MinutasService{
    minutasUrl: string = '../assets/info/minutas.json';

    constructor(private httpClient:HttpClient){
        /* this.minutas = [
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
        ] */
    }

    cargarMinutas(): Observable<any> {
        return this.httpClient.get(this.minutasUrl);
    }

}