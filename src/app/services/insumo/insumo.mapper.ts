import { Injectable } from "@angular/core";
import { Insumo, InsumoDTO, NewInsumo} from "./insumo.type";

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

    mapInsumoToDto(insumo: NewInsumo): InsumoDTO {
        const insumoDTO = {} as InsumoDTO;

        insumoDTO.insumo = insumo.nombre;
        insumoDTO.gramos = insumo.gramos;

        return insumoDTO;
    }

}

