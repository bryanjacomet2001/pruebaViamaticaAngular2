import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AutoresRoutingModule } from './autores-routing.module';
import { TablaAutoresComponent } from './components/tabla-autores/tabla-autores.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ModalObrasComponent } from './components/modal/modal-obras/modal-obras.component';
import { ObrasModule } from '../obras/obras.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    TablaAutoresComponent,
    ModalObrasComponent
  ],
  imports: [
    AutoresRoutingModule,
    MatIconModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ObrasModule
  ]
})
export class AutoresModule { }
