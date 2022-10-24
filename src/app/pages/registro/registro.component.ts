
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidationErrors} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    let form = {
      email: ['', Validators.compose([
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.pattern(/^.{6,}$/),
        Validators.required
      ])],
      copyPassword: ['', Validators.compose([
        Validators.pattern(/^.{6,}$/),
        Validators.required,
      ])]
    }
    this.formRegistro = this.formBuilder.group(form,{validator:this.checkPass});
  }

  signIn() {
    console.log(this.formRegistro.status);
    if (this.formRegistro.status === 'VALID') {
      this.router.navigate(['/inicio'])
    } 
  }


  checkPass(group: FormGroup):  ValidationErrors | null {
    let pass = group.controls['password'].value;
    let copyPass = group.controls['copyPassword'].value;
    return pass === copyPass ? null : { notSame: false }
  }

}
