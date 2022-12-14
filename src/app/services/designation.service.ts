import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Designation } from '../models/designation.model';
import { Employee } from '../models/emp.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }
  getAllDesignations():Observable<Designation[]>{
    return this.http.get<Designation[]>('https://localhost:44358/api/Designation');

  }
  addDesignation(request:Designation):Observable<Designation>
  {
    return this.http.post<Designation>('https://localhost:44358/api/Designation',request);
  }
  getDesignation(designationID:string):Observable<Designation>
  {
    return this.http.get<Designation>('https://localhost:44358/api/Designation/'+designationID);
    
  }
  updateDesignation(designationID:number,request:Designation):Observable<Designation>{
    return this.http.put<Designation>('https://localhost:44358/api/Designation?DesignationID='+designationID,request)
  }

  deleteDesignation(designationID:number):Observable<Designation>
  {
   return this.http.delete<Designation>('https://localhost:44358/api/Designation/'+designationID);
  }
  
}

