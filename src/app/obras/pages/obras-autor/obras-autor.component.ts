import { Component, Inject } from '@angular/core';
import { ObrasService } from '../../services/obras.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Obras } from '../../interface/obras.interface';
import { ModalObrasComponent } from 'src/app/autores/components/modal/modal-obras/modal-obras.component';

@Component({
  selector: 'app-obras-autor',
  templateUrl: './obras-autor.component.html',
  styleUrls: ['./obras-autor.component.css']
})
export class ObrasAutorComponent {
  obras!: Obras[];
  obrasRandom!: Obras[];

  constructor(@Inject(MAT_DIALOG_DATA) public autor: string, private obrasService: ObrasService, 
              private dialogRefModal: MatDialogRef<ModalObrasComponent> ) { }

  ngOnInit(): void {
    this.obrasService.getObrasAutores(this.autor).subscribe(obras => this.obras = obras);
    this.obrasService.getObrasRandom().subscribe(obras => this.obrasRandom = obras );
  }
  
  agregarObrasFavoritos(obra: Obras): void{
    this.obrasService.agregarObrasFavoritas(obra);
  }

  closeDialog(){
    this.dialogRefModal.close();
  }
}
