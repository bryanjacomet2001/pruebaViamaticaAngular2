import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'favoritos',
        component: ObrasFavoritasComponent
      },
      {
        path: '**',
        redirectTo: 'favoritos'
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ObrasRoutingModule { }
