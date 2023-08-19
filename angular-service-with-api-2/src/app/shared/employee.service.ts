import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url: string = environment.api_url;
  constructor(private httpClient: HttpClient) { }
  GetAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.api_url + 'GetAllEmployees');
  }
  GetEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.api_url + 'GetEmployeeById/' + id);
  }
  AddEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(this.api_url + 'AddEmployee', employee);
  }
  EditEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put(this.api_url + 'EditEmployee', employee);
  }
  DeleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.api_url + 'DeleteEmployee/' + id);
  }

}
