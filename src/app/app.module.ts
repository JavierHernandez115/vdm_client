import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosModule } from './features/empleados/empleados.module';
import { VacacionesModule } from './features/vacaciones/vacaciones.module';
import { AsistenciasModule } from './features/asistencias/asistencias.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbonosModule } from './features/abonos/abonos.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    DashboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EmpleadosModule,
    VacacionesModule,
    AsistenciasModule,
    AbonosModule,
    InputNumberModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
