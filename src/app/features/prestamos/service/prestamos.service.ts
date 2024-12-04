import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  private BaseUrl= environment.ServUrl+"prestamos"

  //Optiene todos los prestamos
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseUrl}`);
  }

  //Busca prestamos por Id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BaseUrl}/${id}`);
  }

   // Actualiza un prestamo
  update(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, empleado);
  }

    // Crea un nuevo prestamo
  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}`, empleado);
  }
  

  // Elimina un prestamo
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`);
  }

  constructor(private http:HttpClient) { }
}
