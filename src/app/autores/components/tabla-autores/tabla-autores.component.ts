import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Autor } from '../../interfaces/autores.interface';
import { AutoresService } from '../../services/autores.service';
import { MatTableDataSource } from '@angular/material/table';
import { ModalObrasComponent } from '../modal/modal-obras/modal-obras.component';

@Component({
  selector: 'app-tabla-autores',
  templateUrl: './tabla-autores.component.html',
  styleUrls: ['./tabla-autores.component.css']
})
export class TablaAutoresComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataAutores!: Autor;

  displayedColumns: string[] = ['nombreAutor', 'opciones' ];
  dataSource!: MatTableDataSource<string>;

  constructor(private authserv: AutoresService,  private matDialog: MatDialog) { }
  
  ngOnInit(): void {
    this.authserv.allAutores.subscribe(autor =>{
      this.dataAutores = autor;
      this.dataSource = new MatTableDataSource<string>(this.dataAutores.authors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  abrirVerObras(autor: string): MatDialogRef<ModalObrasComponent>{
    return this.matDialog.open(ModalObrasComponent, {
      width: '1600px',
      height: '600px',
      data: autor
    });
  }
}
