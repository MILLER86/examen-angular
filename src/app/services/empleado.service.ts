import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from '@angular/common/http'
import { IEmpleado } from '../interfaces/empleadosInterface';

const API_GET_ALL_EMPLOYEE = environment.API_GET_ALL_EMPLOYEE;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  getAllEmployee(){
  return this.http.get<IEmpleado>(API_GET_ALL_EMPLOYEE);
}
}

