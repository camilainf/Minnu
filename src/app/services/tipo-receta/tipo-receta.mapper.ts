import { Injectable } from "@angular/core";
import { TipoReceta, TipoRecetaDTO } from "./tipo-receta.type";

@Injectable({
    providedIn: 'root'
})

export class TipoRecetaMapper {

    mapDTOtoTipoReceta(tipoRecetaDTO: TipoRecetaDTO): TipoReceta {
        const tiporeceta = {} as TipoReceta;
        
        tiporeceta.id = tipoRecetaDTO.idtiporeceta;
        tiporeceta.nombreTipo = tipoRecetaDTO.tiporeceta;

        return tiporeceta;
    }

    mapTipoRecetaToDto(tipoReceta: TipoReceta): TipoRecetaDTO {
        const tipoRecetaDTO = {} as TipoRecetaDTO;

        tipoRecetaDTO.idtiporeceta = tipoReceta.id;
        tipoRecetaDTO.tiporeceta = tipoReceta.nombreTipo;

        return tipoRecetaDTO;
    }

}

