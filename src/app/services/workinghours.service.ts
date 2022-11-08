import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workinghours } from '../models/workinghours.model';

@Injectable({
  providedIn: 'root'
})
export class WorkinghoursService {

  constructor(private http:HttpClient) { }
  getToalWorkingHours():Observable<Workinghours[]>{
    return this.http.get<Workinghours[]>('https://localhost:44358/api/WorkingHourManagement');

  }
  addWorkingHours(request:Workinghours):Observable<Workinghours>
  {
    return this.http.post<Workinghours>('https://localhost:44358/api/WorkingHourManagement',request);
  }
  getWorkingHour(id:string):Observable<Workinghours>
  {
    return this.http.get<Workinghours>('https://localhost:44358/api/WorkingHourManagement/'+id);
    
  }
  updateWorkingHours(id:number,request:Workinghours):Observable<Workinghours>{
    return this.http.put<Workinghours>('https://localhost:44358/api/WorkingHourManagement?id='+id,request)
  }

  deleteWorkingHours(id:number):Observable<Workinghours>
  {
   return this.http.delete<Workinghours>('https://localhost:44358/api/WorkingHourManagement/'+id);
  }
  
}
//
//
//
//
//