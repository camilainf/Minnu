import { Receta } from "../receta/receta.type"

export interface Menu{
    id: number;
    tipo: string;
    regimen: string;
    raciones: number;
    recetas: Receta[];
}