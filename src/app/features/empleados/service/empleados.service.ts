import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private BaseUrl= environment.ServUrl+"empleados"
  
  //Guardar Salario Empleado
  createSalario(id: number, salario: number): Observable<any> {
    const data = {
        empleado: id,           // Enviamos el ID del empleado
        sueldo_semanal: salario // Enviamos el salario semanal
    };

    return this.http.post<any>(`${environment.ServUrl}salarios/`, data);
  }

  getSalaryByEmpleadoId(id: number): Observable<any> {
    return this.http.get<any>(`${environment.ServUrl}salarios/${id}`);
  }

  updateSalario(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${environment.ServUrl}salarios/${id}/`, empleado);
  }

  //Lista a todos los empleados
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseUrl}`);
  }

  //Busca empleado por Id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BaseUrl}/${id}`);
  }

   // Actualiza un empleado
  update(id: number, empleado: any): Observable<any> {
    if (empleado.fecha_entrada instanceof Date) {
      empleado.fecha_entrada = empleado.fecha_entrada.toISOString().split('T')[0];
    }
    return this.http.put<any>(`${this.BaseUrl}/${id}/`, empleado);
  }

    // Crea un nuevo empleado
  create(empleado: any): Observable<any> {
    if (empleado.fecha_entrada instanceof Date) {
      empleado.fecha_entrada = empleado.fecha_entrada.toISOString().split('T')[0];
    }
    console.log('Empleado para crear:', empleado);
    return this.http.post<any>(`${this.BaseUrl}/`, empleado);
  }
  

  // Elimina un empleado
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/${id}/`);
  }


  constructor(private http:HttpClient) { }
}
