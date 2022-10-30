import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./usuario.type";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    cuentasUsuarios: string = '../assets/info/users.json';
    usuarios: Usuario[] = [];
    constructor(private httpClient:HttpClient) {
        this.httpClient.get(this.cuentasUsuarios).subscribe((data)=>{
            this.usuarios = data as Usuario[];
        })
    }
}