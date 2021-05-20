import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { RegistroEspecialistaComponent } from './registro/registro-especialista/registro-especialista.component';
import { RegistroPacienteComponent } from './registro/registro-paciente/registro-paciente.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RegistroEspecialistaComponent,
    RegistroPacienteComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule
  ]
})
export class IngresoModule { }
