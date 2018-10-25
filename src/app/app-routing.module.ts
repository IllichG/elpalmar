import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { DeptosComponent } from './pages/deptos/deptos.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { PropsComponent } from './pages/props/props.component';
import { CalidadComponent } from './pages/calidad/calidad.component';
import { ComentsComponent } from './pages/coments/coments.component';
import { CommonModule } from '@angular/common';

const app_routes: Routes = [
  { path: 'init', component: InitComponent },
  { path: 'deptos', component: DeptosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'props', component: PropsComponent },
  { path: 'calidad', component: CalidadComponent },
  { path: 'coments', component: ComentsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'init' },
];

@NgModule({
  imports: [
    RouterModule.forRoot( app_routes ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
