
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Constant } from "../../../environments/constants/constants";
import { RegimenMapper } from "./regimen.mapper";

@Injectable({
    providedIn: 'root'
})

export class RegimenesService{
    private regimenes_endpoint : string = '/regimenes';
    

    constructor(private httpClient:HttpClient, private regimenMapper: RegimenMapper){
    }

    cargarRegimenes() : Observable<any> {
        const url = Constant.API_URL + this.regimenes_endpoint;
        return this.httpClient.get(url);
    }

    getRegimenByIdMenu(idMenu:number) : Observable<any>{
        const url = Constant.API_URL + this.regimenes_endpoint + '/' + idMenu;
        return this.httpClient.get(url, {observe : 'response'});
    }
    
}