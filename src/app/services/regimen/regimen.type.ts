import { Receta } from '../receta/receta.type';
import { Menu } from '../menu/menu.type';

export interface Regimen {
    nombre: string;
    raciones: number;
    menu: Menu;
}
