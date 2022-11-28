

export interface Receta {
    id: number;
    idTipoReceta: number; // Ensalada, Plato de fondo
    nombreTipo?: string;
    nombre: string; // Lentejas con arroz, fruta natura, Bife al jugo con pure deshid
}

export interface RecetaDTO {
    idreceta: number;
    tiporeceta: number;
    receta: string;
}