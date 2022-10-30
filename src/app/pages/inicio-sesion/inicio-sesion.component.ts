import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  formularioLoginForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    let form = {
      email: ['', Validators.compose([
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.pattern(/^.{6,}$/),
        Validators.required
      ])],
    }
    this.formularioLoginForm = this.formBuilder.group(form); 
  }

  iniciarSesion() {
    console.log(this.formularioLoginForm.status);
    if (this.formularioLoginForm.status === 'VALID') {
      console.log('Inicio de sesion exitoso');
      this.router.navigate(['/inicio'])
    } else {
      console.log('Faltan datos por ingresar');
    }
  }
}