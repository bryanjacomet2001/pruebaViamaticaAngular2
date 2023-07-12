import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  return (authService._usuario) ? true : false; 
};