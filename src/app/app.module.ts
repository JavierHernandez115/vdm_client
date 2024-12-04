import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { EmpleadosModule } from './features/empleados/empleados.module';
import { VacacionesModule } from './features/vacaciones/vacaciones.module';
import { AsistenciasModule } from './features/asistencias/asistencias.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbonosModule } from './features/abonos/abonos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    EmpleadosModule,
    VacacionesModule,
    AsistenciasModule,
    AbonosModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
