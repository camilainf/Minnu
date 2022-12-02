
export interface Regimen {
    id: number;
    nombre: string;
}

export interface RegimenDTO {
    idregimen: number;
    regimen: string;
}

export interface NewReceta {
    nombre: string,
    tipoReceta: string,
    insumos: number[]
}

