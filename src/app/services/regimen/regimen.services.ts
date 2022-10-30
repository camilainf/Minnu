
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class RegimenService{
    regimenesUrl: string = '../assets/info/regimenes.json';

    constructor(private httpClient:HttpClient) {
    }

    cargarRegimenes(): Observable<any> {
        return this.httpClient.get(this.regimenesUrl);
    }



}
