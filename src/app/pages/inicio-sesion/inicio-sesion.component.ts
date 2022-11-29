import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserMapper } from 'src/app/services/usuario/user.mapper';
import { UserInDTO } from 'src/app/services/usuario/usuario.type';
import { UserService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  formularioLoginForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private userMapper: UserMapper) { }

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

  /* iniciarSesion() {
    console.log(this.formularioLoginForm.status);
    if (this.formularioLoginForm.status === 'VALID') {
      console.log('Inicio de sesion exitoso');
      this.router.navigate(['/inicio'])
    } else {
      console.log('Faltan datos por ingresar');
    }
  } */

  login() {
    console.log(this.formularioLoginForm.status);

    if (this.formularioLoginForm.status === 'VALID') {
      const email = this.formularioLoginForm.get('email')!.value;
      const pass = this.formularioLoginForm.get('password')!.value;

      this.userService.login(email, pass).subscribe((res)=>{
        console.log('res: ',res.body);
        if(res.status == '200') {
          this.userService.user = this.userMapper.mapDTOtoUser(res.body.user as UserInDTO)
          console.log(this.userService.getUser());
          localStorage.setItem('token',res.body.token);
          this.router.navigate(['/inicio'])
        } else {
          console.log('ERROR EN EL LOGIN');
        }
      })
      
    } else {
      console.log('Faltan datos por ingresar');
    }
  }
}