
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, FormControl, ValidatorFn, Validator} from '@angular/forms';
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
    let formatoEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    let formatoUsername = /^.{1,10}$/
    this.formRegistro = this.formBuilder.group({
      username: ['', Validators.compose([Validators.pattern(formatoUsername),Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required,Validators.pattern(formatoEmail)])],
      passwords: this.formBuilder.group({
        password: ['', Validators.compose([Validators.pattern(/^.{6,}$/), Validators.required])],
        copyPassword: ['', Validators.compose([Validators.pattern(/^.{6,}$/), Validators.required])]
      },
        {validators: this.checkPass}
      ),
      cb: [false, Validators.requiredTrue]
    })

  }

  signIn() {
    console.log(this.formRegistro.status);
    if (this.formRegistro.status === 'VALID') {
      this.router.navigate(['/inicio'])
    } 
  }

  checkPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let pass = control.get('password');
    let confirmPassword = control.get('copyPassword');
  
    return pass!.value === confirmPassword!.value ? null : { notSame: true };
  };
  
  get controls() {
    return this.formRegistro.controls;
  }
  
  get passControls() {
    return ((this.formRegistro.get('passwords') as FormGroup).controls);
  }

}
