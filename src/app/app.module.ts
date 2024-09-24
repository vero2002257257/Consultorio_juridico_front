import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { DetallesExpedienteComponent } from './detalles-expediente/detalles-expediente.component';
import { ActuacionesExpedienteComponent } from './actuaciones-expediente/actuaciones-expediente.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { VerExpedientesComponent } from './ver-expedientes/ver-expedientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpedientesComponent,
    DetallesExpedienteComponent,
    ActuacionesExpedienteComponent,
    UsuariosExternosComponent,
    VerExpedientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
