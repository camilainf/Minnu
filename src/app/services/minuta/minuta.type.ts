import { Regimen } from '../regimen/regimen.type';

export interface Minuta{
    id: number;
    nombreMinuta: string;
    regimenes: Regimen[];
}

