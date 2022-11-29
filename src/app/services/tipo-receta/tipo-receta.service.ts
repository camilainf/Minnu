import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Constant } from "../../../environments/constants/constants";
import { TipoRecetaMapper } from "./tipo-receta.mapper";

@Injectable({
    providedIn: 'root'
})

export class TipoRecetaService{
    private tiposrecetas_endpoint : string = '/tiposrecetas';
    

    constructor(private httpClient:HttpClient, private tipoRecetaMapper: TipoRecetaMapper){
    }

    cargarTiposRecetas() : Observable<any> {
        const url = Constant.API_URL + this.tiposrecetas_endpoint;
        return this.httpClient.get(url);
    }

    getTipoRecetaByIdReceta(idReceta:number) : Observable<any>{
        return this.httpClient.get(Constant.API_URL + this.tiposrecetas_endpoint + '/' + idReceta, {observe : 'response'});
    }
    
}