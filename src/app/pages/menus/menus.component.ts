import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menu/menus.service';
import { Menu } from 'src/app/services/menu/menu.type';
declare var window : any;

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  menus: Menu[] = [];
  formModal: any;
  modalRegistroMenu : any;

  constructor(private menusService: MenusService) { }

  ngOnInit(): void {

    this.menusService.cargarMenus().subscribe((data)=>{
      
      this.menus = data;

    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    )

    this.modalRegistroMenu = new window.bootstrap.Modal(
      document.getElementById('modalRegistroMenu')
    )
  }


  // MODAL PARA VER DETALLES DE LA RECETA
  openFormModal() {
    this.formModal.show();
  }

  saveSomeThing() {
    this.formModal.hide();
  }

  closeModal() {
    this.formModal.hide();
  }

  // MODAL PARA REGISTRAR UN MENU
  openRegistroModal() {
    this.modalRegistroMenu.show();
  }

  cancelarRegistro() {
    this.modalRegistroMenu.hide();
  }

  guardarCambiosRegistro() {
    this.modalRegistroMenu.hide();
  }

}
