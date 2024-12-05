import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonosService {
  private BaseUrl= environment.ServUrl+"abonos"
  
  //Lista a todos los Abonos
  
  getAllByEmpleados(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ServUrl}empleado/${id}/abonos`);
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseUrl}`);
  }

  //Busca Abono por Id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BaseUrl}/${id}`);
  }

   // Actualiza un Abono
  update(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, empleado);
  }

    // Crea un nuevo Abono
  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}`, empleado);
  }
  

  // Elimina un Abono
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`);
  }

  constructor(private http:HttpClient) { }
}
