import { Component, OnInit } from '@angular/core';
import { Regimen } from "../../services/regimen/regimen.type";
import { RegimenService } from "../../services/regimen/regimen.services";
import { Menu } from 'src/app/services/menu/menu.type';
import { MenusService } from '../../services/menu/menus.service';

@Component({
  selector: 'app-regimenes',
  templateUrl: './regimenes.component.html',
  styleUrls: ['./regimenes.component.scss']
})
export class RegimenesComponent implements OnInit {
  regimenes : Regimen[] = [];
  menus : Menu[] = [];

  constructor(private regimenService: RegimenService, private menusService: MenusService) {}

  ngOnInit(): void {
    this.regimenes = this.regimenService.regimenes;
    this.menus = this.menusService.menus;
  }

}
