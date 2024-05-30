import { Routes } from '@angular/router';
import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo } from "@angular/fire/auth-guard"


export const routes: Routes = [

  {
    path: '', redirectTo: 'bienvenida', pathMatch: 'full'
  },
  {
    path: 'bienvenida', loadComponent: () => import('./components/bienvenida/bienvenida.component'),
  },
  {
    path: 'login', loadComponent: () => import('./components/login/login.component'),
    ...canActivate(()=> redirectLoggedInTo(['/bienvenida'])),

  },
  {
    path: 'altaRepartidor', loadComponent: () => import('./repartidor/alta-repartidor/alta-repartidor.component'),
    ...canActivate(()=> redirectUnauthorizedTo(['/login'])),

  },
  {
    path: 'repartidor', loadComponent: () => import('./repartidor/page-repartidor/page-repartidor.component'),
    ...canActivate(()=> redirectUnauthorizedTo(['/login'])),

  },

];
