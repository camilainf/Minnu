import { Component, OnInit } from '@angular/core';
import { Regimen } from "../../services/regimen/regimen.type";
import { RegimenService } from "../../services/regimen/regimen.services";
import { MenusService } from 'src/app/services/menu/menus.service';
import { Menu } from 'src/app/services/menu/menu.type';

@Component({
  selector: 'app-regimenes',
  templateUrl: './regimenes.component.html',
  styleUrls: ['./regimenes.component.scss']
})
export class RegimenesComponent implements OnInit {
  regimenes : Regimen[] = [];
  menus: Menu[] = [];

  constructor(private regimenService: RegimenService, private menuService: MenusService) {}

  ngOnInit(): void {
    this.regimenService.cargarRegimenes().subscribe((data)=>{
      
      this.regimenes = data;
    })

    this.menuService.cargarMenus().subscribe((data)=>{
      this.menus = data;
    })
  }

  cantidadRaciones(regimen: Regimen): number {
    let raciones = 0;

    let almuerzo = this.menuService.getMenuById(regimen.almuerzo, this.menus);
    let cena = this.menuService.getMenuById(regimen.cena, this.menus);

    raciones = almuerzo.raciones + cena.raciones;
    return raciones;

  }

}
