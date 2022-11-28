import { Injectable } from "@angular/core";
import { RecetaDTO, Receta } from "./receta.type";

@Injectable({
    providedIn: 'root'
})

export class RecetaMapper {

    mapDTOtoReceta(recetaDTO: RecetaDTO): Receta {
        const receta = {} as Receta;

        receta.id = recetaDTO.idreceta;
        receta.idTipoReceta = recetaDTO.tiporeceta;
        receta.nombre = recetaDTO.receta;

        return receta;
    }

    mapToDTO(receta: Receta): RecetaDTO  {
        const recetaDTO = {} as RecetaDTO;

        recetaDTO.idreceta = receta.id;
        recetaDTO.tiporeceta = receta.idTipoReceta;
        recetaDTO.receta = receta.nombre;

        return recetaDTO;
    }
}