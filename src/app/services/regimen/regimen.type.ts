import { Receta } from '../receta/receta.type';
import { Menu } from '../menu/menu.type';

export interface Regimen {
    tipo: string;
    almuerzo: Menu;
    cena: Menu;  
}
