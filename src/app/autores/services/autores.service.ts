import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Autor } from '../interfaces/autores.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http: HttpClient ) { }

  get allAutores(): Observable<Autor>{
    return this.http.get<Autor>('https://poetrydb.org/author');
  }
}
