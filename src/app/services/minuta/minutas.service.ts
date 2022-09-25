import {Minuta} from "./minuta.type"
import { MenusService } from "../menu/menus.services";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MinutasService{
    minutas : Minuta[] = [];
    constructor(private menuService:MenusService){
        this.minutas = [
            {
                id: 1,
                nombreMinuta: 'Minuta 1',
                menus:menuService.menus
            } as Minuta,
            {
                id: 2,
                nombreMinuta: 'Minuta 2',
                menus:menuService.menus,
            } as Minuta,
            {
                id: 3,
                nombreMinuta: 'Minuta 3',
                menus:menuService.menus
            } as Minuta,
            {
                id: 4,
                nombreMinuta: 'Minuta 4',
                menus:menuService.menus
            } as Minuta,
        ]
    }
}