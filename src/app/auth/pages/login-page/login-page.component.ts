import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  dataUsuario!: Usuario;

  formularioLogin: FormGroup = this.fb.group({
    usuario:     ['', [Validators.required, this.usuarioValido]],
    contrasenia: ['', [Validators.required, this.contraseniaValida]]
  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService ) { }

  campoNoValido(campo: string){
    return this.formularioLogin.get(campo)?.invalid &&
           this.formularioLogin.get(campo)?.touched;
  }

  usuarioValido(campo: FormControl): object | null{
    const usuario: string = campo.value.trim().toLowerCase();
    if(usuario !== 'admin') return { usuarioInvalid: true };
    return null;
  }

  contraseniaValida(campo: FormControl): object | null{
    const contrasenia = campo.value.trim().toLowerCase();
    if(contrasenia !== 'admin') return { contraseniaInvalid: true };
    return null;
  }


  get validarCampoUsuario(): string {
    const errors: ValidationErrors = this.formularioLogin.get('usuario')?.errors!;

    if(errors?.['required']) return '*Debe llenar este campo';

    if(errors?.['usuarioInvalid']) return '*Usuario invalido';
    
    return '';
  }

  get validarCampoContrasenia(): string {
    const errors: ValidationErrors = this.formularioLogin.get('contrasenia')?.errors!;

    if(errors?.['required']) return '*Debe llenar este campo';

    if(errors?.['contraseniaInvalid']) return '*Contraseña invalida';
    
    return '';
  }

  inciarSesion(){

    if(this.formularioLogin.invalid){
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const usuario = this.formularioLogin.get('usuario')?.value;
    const contrasenia = this.formularioLogin.get('contrasenia')?.value;

    this.dataUsuario = { usuario, contrasenia };
    this.authService.obtenerUsuario(this.dataUsuario);
    this.router.navigate(['autor/listado']);
  }
}
