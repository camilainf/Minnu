import {Insumo, InsumoDTO, NewInsumo} from "./insumo.type"
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../../../environments/constants/constants";
import { InsumoMapper } from "./insumo.mapper";

@Injectable({
    providedIn: 'root'
})

export class InsumosService{
    private insumos_endpoint : string = '/insumos/';
    private insumos_endpoint2 : string = '/insumoss/';


    constructor(private httpClient:HttpClient, private insumomapper: InsumoMapper){
    }

    cargarInsumos(): Observable<any> {
        const url = Constant.API_URL + this.insumos_endpoint;
        return this.httpClient.get(url);
    }

    cargarInsumoById(idReceta: number): Observable<any> {
        const url = Constant.API_URL + this.insumos_endpoint + idReceta ;
        return this.httpClient.get(url, {observe: 'response'});
    }

    cargarInsumoByRecipeId(idReceta: number): Observable<any> {
        const url = Constant.API_URL + this.insumos_endpoint2 + idReceta ;
        return this.httpClient.get(url, {observe: 'response'});
    }

    crearInsumo(insumo: NewInsumo): Observable<any> {
        const body = this.insumomapper.mapInsumoToDto(insumo);
        const url = Constant.API_URL + this.insumos_endpoint ;
        return this.httpClient.post(url, body, { headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),observe: 'response'});
    }

    editarInsumo(insumo: InsumoDTO ){
      const body = insumo;
      const url = Constant.API_URL + this.insumos_endpoint ;
      return this.httpClient.put(url,body,{ headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),observe: 'response'})
    }

    eliminarInsumo(idInsumo: number){
      return this.httpClient.delete(Constant.API_URL + this.insumos_endpoint+idInsumo,{ headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),observe: 'response'})
    }

}
