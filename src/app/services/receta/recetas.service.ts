import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Receta } from "./receta.type";

@Injectable({
    providedIn:'root'
})

export class RecetasService{
    recetasUrl : string = '../assets/info/recetas.json';

    constructor(private httpClient:HttpClient) {
    }

    cargarRecetas(): Observable<any> {
        return this.httpClient.get(this.recetasUrl);
    }
}