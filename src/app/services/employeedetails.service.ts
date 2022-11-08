import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/emp.model';
import { EmployeeDetails } from '../models/employeedetails.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor(private http:HttpClient) { }
  getAllEmployees():Observable<EmployeeDetails[]>
  {
    return this.http.get<EmployeeDetails[]>('https://localhost:44358/api/EmployeeDetails');
  }
  addNewEmployee(request:Employee):Observable<Employee>
  {
    return this.http.post<Employee>('https://localhost:44358/api/EmployeeDetails',request);
  }
 
}
