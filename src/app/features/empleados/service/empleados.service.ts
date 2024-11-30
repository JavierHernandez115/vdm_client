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


  constructor(private http:HttpClient) { }
}
