import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  _usuario!: Usuario;
  
  get usuario(): Usuario {
    return this._usuario;
  }
  
  obtenerUsuario(usuario: Usuario){
    this._usuario = usuario;
  }
}
