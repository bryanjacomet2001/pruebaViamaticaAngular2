import { Component } from '@angular/core';
import { AutoresService } from '../../services/autores.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  dataAutores!: string[];

  constructor(private autoresServices: AutoresService ) { }

  ngOnInit(): void {
    this.autoresServices.allAutores.subscribe(({authors}) => this.dataAutores = authors);
  }

}
