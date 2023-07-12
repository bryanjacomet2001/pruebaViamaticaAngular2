import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'autor',
    loadChildren: () => import('./autores/autores.module').then( m => m.AutoresModule ),
    canMatch: [ authGuard ]
  },
  {
    path:'obras',
    loadChildren: () => import('./obras/obras.module').then( m => m.ObrasModule ),
    canMatch: [ authGuard ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
