import { Insumo } from "../insumo/insumo.type";

export interface Receta {
    id: number;
    idTipoReceta: number;
    tipoReceta?: string;
    nombreTipo?: string;
    nombre: string;
    insumos?: Insumo[];
}

export interface RecetaDTO {
    idreceta: number;
    tiporeceta: number;
    receta: string;
    insumos?: Insumo[];
}

export interface NewReceta {
    nombre: string,
    idTipoReceta: number;
    insumos: number[]
}
