import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';
import { ObrasAutorComponent } from './pages/obras-autor/obras-autor.component';
import { MaterialModule } from '../material/material.module';
import { ObrasRoutingModule } from './obras-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ObrasFavoritasComponent,
    ObrasAutorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ObrasRoutingModule
  ],

  exports: [
    ObrasAutorComponent
  ]
})
export class ObrasModule { }
