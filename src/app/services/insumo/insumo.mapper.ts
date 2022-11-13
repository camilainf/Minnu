import { Injectable } from "@angular/core";
import { Insumo, InsumoDTO } from "./insumo.type";

@Injectable({
    providedIn: 'root'
})

export class InsumoMapper {

    mapInsumoDTOToInsumo(insumoDTO: InsumoDTO): Insumo {
        const insumo = {} as Insumo;

        insumo.id = insumoDTO.idinsumo;
        insumo.nombre = insumoDTO.insumo;
        insumo.gramos = insumoDTO.gramos;

        return insumo;
        
    }

}

