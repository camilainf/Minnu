import {Insumo} from "./insumo.type"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Constant } from "../../../environments/constants/constants";
import { InsumoMapper } from "./insumo.mapper";

@Injectable({
    providedIn: 'root'
})

export class InsumosService{
    private insumos_endpoint : string = '/insumos/';
    

    constructor(private httpClient:HttpClient, private insumomapper: InsumoMapper){
    }

    cargarInsumos(): Observable<any> {
        const url = Constant.API_URL + this.insumos_endpoint;
        return this.httpClient.get(url);
    }

    cargarInsumoById(): Observable<any> {
        const url = Constant.API_URL + this.insumos_endpoint + '1';
        return this.httpClient.get(url);
    }

    crearInsumo(insumo: Insumo): Observable<any> {
        const body = this.insumomapper.mapInsumoToDto(insumo);
        const url = Constant.API_URL + this.insumos_endpoint ;
        return this.httpClient.post(url, body, {observe: 'response'});
    }
    
}