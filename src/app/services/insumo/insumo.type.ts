export interface Insumo{
    id: number;
    nombre: string;
    gramos: number;
}

export interface InsumoDTO {
    idinsumo: number;
    gramos: number;
    insumo: string;
}

export interface NewInsumo{
    nombre: string;
    gramos: number;
}