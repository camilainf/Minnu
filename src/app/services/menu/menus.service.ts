import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Menu } from "./menu.type";

@Injectable({
    providedIn:'root'
})

export class MenusService{


    
    menusUrl: string = '../assets/info/menus.json';
    constructor(private httpClient:HttpClient) {
    }

    cargarMenus(): Observable<any> {
        return this.httpClient.get(this.menusUrl);
    }

    getMenuById(id: number, menus: Menu[]): Menu{
        let menu = {} as Menu;

        for(let i in menus) {

            if(id == menus[i].id) {
                return menus[i];
            }
                
        }
        return menu;
    }

}