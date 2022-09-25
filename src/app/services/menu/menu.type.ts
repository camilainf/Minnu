import { Receta } from "../receta/receta.type"

export interface Menu{
    tipoRegimen: string;
    ensalada?: Receta,
    platoDeFondo: Receta,
    postre: Receta
}