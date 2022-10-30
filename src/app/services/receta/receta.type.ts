import { Insumo } from '../insumo/insumo.type';

export interface Receta {
    id: number;
    tipo: string; // Ensalada, Plato de fondo
    nombre: string; // Lentejas con arroz, fruta natura, Bife al jugo con pure deshid
    insumos?: Insumo[]; // Aceite, arroz, lentejas, ajo, etc
}