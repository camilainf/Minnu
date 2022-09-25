
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioLoginForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    let form = {
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.pattern(/^.{5,}$/),
        Validators.required
      ])],
      password2: ['', Validators.compose([
        Validators.pattern(/^.{5,}$/),
        Validators.required
      ])]
    }
    this.formularioLoginForm = this.formBuilder.group(form); 
  }

  iniciarSesion() {
    console.log(this.formularioLoginForm.status);
    if (this.formularioLoginForm.status === 'VALID') {
      this.router.navigate(['/inicio'])
    }
  }
}
