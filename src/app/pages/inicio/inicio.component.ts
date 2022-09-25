import { Insumo } from 'src/app/services/insumo/insumo.type';
import { Menu } from 'src/app/services/menu/menu.type';
import { Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MenusService } from '../../services/menu/menus.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  insumos : Insumo[] = [];
  menus : Menu[] = [];
  constructor(private insumosService: InsumosService,private menusService: MenusService) {}

  ngOnInit(): void {
    this.insumos = this.insumosService.insumos;
    this.menus = this.menusService.menus;
  }

}
