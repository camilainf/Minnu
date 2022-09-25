import { Insumo } from '../insumo/insumo.type';

export interface Menu {
    nombre: string;
    raciones: number;
    preparaciones: Preparacion[];
}

export interface Preparacion {
    tipo: string;
    nombre: string;
    insumos: Insumo[];
}