import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obras } from '../interface/obras.interface';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  private _obrasFavoritas: Obras[] = [];
  
  constructor( private http: HttpClient ) { }

  getObrasRandom(){
    const LIMIT: number = 6; 
    return this.http.get<Obras[]>(`https://poetrydb.org/random/${LIMIT}/author,title.json`);
  }

  getObrasAutores(autor: string){
    return this.http.get<Obras[]>(`https://poetrydb.org/author/${autor}/title`);
  }

  agregarObrasFavoritas(obras: Obras): void{
    if(!this._obrasFavoritas.includes(obras))
      this._obrasFavoritas.push(obras);
  }

  get obrasFavoritas(): Obras[]{
    return this._obrasFavoritas;
  }

  eliminarObrasFavoritas(title: string): void{
    this._obrasFavoritas = [...this._obrasFavoritas.filter(el => el.title != title)];
  }
}
