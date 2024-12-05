import { Injectable } from '@angular/core';
import {environment} from '../../../../enviroments/enviroment'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  private BaseUrlVT=environment.ServUrl+'vacaciones_tomadas'
  private BaseUrlV=environment.ServUrl+'vacaciones'

  //Vacaciones tomadas  por Empleado
  getAllByEmpleados(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ServUrl}empleado/${id}/vacacion_tomada`);
  }

  //Listar Todas las vacaciones Tomadas
  getAllVT():Observable<any[]>{
    return this.http.get<any[]>(`${this.BaseUrlVT}`);
  }


  //Busca Vacaciones tomadas por Id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BaseUrlVT}/${id}`);
  }

   // Actualiza un vacacion Tomada
  update(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrlVT}/${id}`, empleado);
  }

    // Crea un nueva vacacion Tomada
  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrlVT}`, empleado);
  }
  

  // Elimina una vacacion Tomada
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrlVT}/${id}`);
  }

  constructor(private http:HttpClient) { }
}
