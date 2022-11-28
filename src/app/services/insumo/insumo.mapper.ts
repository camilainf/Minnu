import { Injectable } from "@angular/core";
import { Insumo, InsumoDTO } from "./insumo.type";

@Injectable({
    providedIn: 'root'
})

export class InsumoMapper {

    mapDTOtoInsumo(insumoDTO: InsumoDTO): Insumo {
        const insumo = {} as Insumo;
        
        insumo.id = insumoDTO.idinsumo;
        insumo.nombre = insumoDTO.insumo;
        insumo.gramos = insumoDTO.gramos;

        return insumo;
    }

    mapInsumoToDto(insumo: Insumo): InsumoDTO {
        const insumoDTO = {} as InsumoDTO;

        insumoDTO.idinsumo = insumo.id;
        insumoDTO.insumo = insumo.nombre;
        insumoDTO.gramos = insumo.gramos;

        return insumoDTO;
    }

}

