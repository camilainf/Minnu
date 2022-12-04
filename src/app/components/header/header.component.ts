import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/usuario/usuarios.service";
import {UserIn} from "../../services/usuario/usuario.type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;

  constructor(private router : Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/iniciosesion']);
  }

  loggedIn() {
    return localStorage.getItem('token');
  }

  esAdmin(): boolean {
    if ( localStorage.getItem('user') ) {
      let usuario: UserIn = JSON.parse(localStorage.getItem('user')!);

      if ( usuario.isAdmin ) {
        return true;
      }
    }
    return false;
  }
}
