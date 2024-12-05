import { Component } from '@angular/core';
import { AsistenciasService } from '../service/asistencias.service';
import { EmpleadosService } from '../../empleados/service/empleados.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  empleados: any[] = []; // Lista de empleados para la tabla
  asistencias: any[] = []; // Datos a enviar al servidor

  constructor(
    private empleadosService: EmpleadosService,
    private messageService: MessageService,
    private router: Router,
    private asistenciasService: AsistenciasService
  ) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadosService.getAll().subscribe({
      next: (empleados) => {
        // Inicializamos el campo "asistencia" como falso para todos
        this.empleados = empleados.map((empleado: any) => ({
          ...empleado,
          asistencia: false,
        }));
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
      },
    });
  }

 
  enviarAsistencias(): void {
    // Creamos el array de asistencias con el formato correcto
    this.asistencias = this.empleados.map((empleado) => ({
      empleado: empleado.id, // ID del empleado
      fecha: new Date().toISOString().split('T')[0], // Fecha actual en formato 'YYYY-MM-DD'
      asistencia: empleado.asistencia, // Estado del checkbox (asistencia)
    }));

    // Simulación de envío al servidor
   

    // Enviar al servicio para crear las asistencias
    this.asistencias.forEach((asistencia) => {
      console.log('Asistencias enviadas:', asistencia);
      this.asistenciasService.create(asistencia).subscribe({
        next: (response) => {
          console.log('Asistencia enviada:', response);
          // Mostrar un mensaje de éxito o procesar la respuesta
        },
        error: (err) => {
          console.error('Error al enviar asistencia:', err);
          // Mostrar un mensaje de error
        },
      });
    });
  }
}
