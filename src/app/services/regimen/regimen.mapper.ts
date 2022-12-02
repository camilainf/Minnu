import { Injectable } from "@angular/core";
import { Regimen, RegimenDTO } from "./regimen.type";

@Injectable({
    providedIn: 'root'
})

export class RegimenMapper {

    mapDTOtoRegimen(regimenDTO: RegimenDTO): Regimen {
        const regimen = {} as Regimen;
        
        regimen.id = regimenDTO.idregimen;
        regimen.nombre = regimenDTO.regimen;

        return regimen;
    }

    mapRegimenToDTO(regimen: Regimen): RegimenDTO {
        const regimendto = {} as RegimenDTO;

        regimendto.idregimen = regimen.id;
        regimendto.regimen = regimen.nombre;

        return regimendto;
    }

}