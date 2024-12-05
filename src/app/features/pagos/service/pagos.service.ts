import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private BaseUrl= environment.ServUrl+"pagos"
  
  //Lista a todos los Abonos
  getByDate(fecha: string): Observable<any> {
    return this.http.get<any>(`${this.BaseUrl}/${fecha}`);
  }
  getAllByEmpleados(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ServUrl}empleado/${id}/pagos`);
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

     //Generar Pagos
  generatePagos(id: number): Observable<any> {
      return this.http.post<any>(`${environment.ServUrl}empleado/${id}/registrar_pago/`,true);
    }
  

    // Crea un nuevo Abono
  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/`, empleado);
  }
  

  // Elimina un Abono
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`);
  }

  constructor(private http:HttpClient) { }
}
