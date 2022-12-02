import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { NewReceta, Receta } from "./receta.type";
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

    guardarReceta(receta: NewReceta): Observable<any> {
        const body = receta;
        const url = Constant.API_URL + this.recetas_endpoint;
        return this.httpClient.post(url, body, { headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),observe: 'response'});
    }
}