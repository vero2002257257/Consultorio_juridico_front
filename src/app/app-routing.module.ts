import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { DetallesExpedienteComponent } from './detalles-expediente/detalles-expediente.component';
import { ActuacionesExpedienteComponent } from './actuaciones-expediente/actuaciones-expediente.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { VerExpedientesComponent } from './ver-expedientes/ver-expedientes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'expedientes', component: ExpedientesComponent },
  { path: 'detalles-expediente', component: DetallesExpedienteComponent },
  { path: 'actuaciones-expediente', component: ActuacionesExpedienteComponent },
  { path: 'usuarios-externos', component: UsuariosExternosComponent },
  { path: 'ver-expedientes', component: VerExpedientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
