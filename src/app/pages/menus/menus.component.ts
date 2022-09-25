import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menu/menus.service';
import { Menu } from 'src/app/services/menu/menu.type';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  
  menus: Menu[] = [];
  constructor(private menusService: MenusService) { }

  ngOnInit(): void {
    this.menus = this.menusService.menus;
  }

}
