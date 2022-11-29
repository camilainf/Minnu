
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, FormControl, ValidatorFn, Validator} from '@angular/forms';
import { Router } from "@angular/router";
import { UserRegister } from 'src/app/services/usuario/usuario.type';
import { UserService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

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
      const newUser : UserRegister = {
        nombre: this.formRegistro.get('username')!.value,
        email: this.formRegistro.get('email')!.value,
        pass: this.formRegistro.get('passwords.password')!.value
      }

      this.userService.userRegister(newUser).subscribe((res)=>{
        console.log('res: ',res.body);
        if(res.status == '200') {
          this.router.navigate(['/inicio'])
        } else {
          console.log('ERROR EN EL REGISTRO');
        }
      })
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
