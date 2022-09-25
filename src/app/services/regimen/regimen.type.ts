import { Receta } from '../receta/receta.type';

export interface Regimen {
    nombre: string;
    raciones: number;
    recetas: Receta[];
}
