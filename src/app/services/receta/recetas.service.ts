import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Receta } from "./receta.type";
import { Constant } from "src/environments/constants/constants";

@Injectable({
    providedIn:'root'
})

export class RecetasService{
    recetasUrl : string = '../assets/info/recetas.json';
    private recetas_endpoint : string = '/recetas';

    constructor(private httpClient:HttpClient) {
    }

    cargarRecetas(): Observable<any> {
        const url = Constant.API_URL + this.recetas_endpoint;
        return this.httpClient.get(url);
    }

    cargarRecetasByID(): Observable<any> {
        const url = Constant.API_URL + this.recetas_endpoint + '1';
        return this.httpClient.get(url);
    }
}