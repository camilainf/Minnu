import { Receta } from "../receta/receta.type"

export interface Menu{
    tipo: string;
    regimen: string;
    raciones: number;
    recetas: Receta[];
}