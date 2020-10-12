import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DatoscontactoComponent } from './datoscontacto/datoscontacto.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { ProyectofinalhdComponent } from './proyectofinalhd/proyectofinalhd.component';

const routes: Routes = [
  { path:'me', component: AboutmeComponent },
  { path:'proyectos', component: ProyectosComponent },
  { path:'contacto', component: DatoscontactoComponent },
  { path:'personal', component: DatospersonalesComponent },
  { path:'proyectoHD', component: ProyectofinalhdComponent },
  { path:'', component: AboutmeComponent, pathMatch:'full' }, //cuando la ruta este vacía se irá al componente aboutMe, pathMach --> con todas la coincidencias
  { path:'**', redirectTo: '/', pathMatch:'full' } //cualquier ruta desconocida redigirá a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
