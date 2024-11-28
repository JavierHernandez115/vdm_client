import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { EmpleadosModule } from './features/empleados/empleados.module';
import { VacacionesModule } from './features/vacaciones/vacaciones.module';
import { AsistenciasModule } from './features/asistencias/asistencias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    EmpleadosModule,
    VacacionesModule,
    AsistenciasModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
