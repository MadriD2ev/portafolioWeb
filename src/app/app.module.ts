import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//agregar para utilizar ngModel en los forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DatoscontactoComponent } from './datoscontacto/datoscontacto.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { ProyectofinalhdComponent } from './proyectofinalhd/proyectofinalhd.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Servicios
import { ConexionService } from './services/conexion.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AboutmeComponent,
    ProyectosComponent,
    DatoscontactoComponent,
    DatospersonalesComponent,
    ProyectofinalhdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
