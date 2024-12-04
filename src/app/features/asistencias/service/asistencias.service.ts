import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {
  private BaseUrl= environment.ServUrl+"asistencias"

   //Lista a todas las asistencias
   getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseUrl}`);
  }

  //Busca asistencia por Id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BaseUrl}/${id}`);
  }

   // Actualiza una asistencia
  update(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, empleado);
  }

    // Crea un nueva asistencia
  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}`, empleado);
  }
  

  // Elimina una asistencia
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`);
  }
  constructor(private http:HttpClient) { }
}
