import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PatologiaComponent } from './patologia/patologia.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CargaSintomasComponent } from './carga-sintomas/carga-sintomas.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PatologiaComponent,
    CargaSintomasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
