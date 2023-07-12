import { Component } from '@angular/core';
import { ObrasService } from '../../services/obras.service';
import { Router } from '@angular/router';
import { Obras } from '../../interface/obras.interface';

@Component({
  selector: 'app-obras-favoritas',
  templateUrl: './obras-favoritas.component.html',
  styleUrls: ['./obras-favoritas.component.css']
})
export class ObrasFavoritasComponent {

  constructor ( private obrasService: ObrasService, private router: Router) { }

  _obrasFavoritas!: Obras[];

  get obrasFavoritas() {
    this._obrasFavoritas = this.obrasService.obrasFavoritas;
    return this._obrasFavoritas;
  }

  get totalObrasFavoritas(): number{
    return this.obrasService.obrasFavoritas.length;
  }

  eliminarFavoritos(title: string) {
    this.obrasService.eliminarObrasFavoritas(title);
  }

  volverAlListado(){
    this.router.navigate(['/autor/listado'])
  }

}
