import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private BaseUrl= environment.ServUrl+"empleados"
  
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
