import {Insumo} from "./insumo.type"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class InsumosService{
    insumosUrl : string = '../assets/info/insumos.json';

    constructor(private httpClient:HttpClient){
    }

    cargarInsumos(): Observable<any> {
        return this.httpClient.get(this.insumosUrl);
    }
    
}