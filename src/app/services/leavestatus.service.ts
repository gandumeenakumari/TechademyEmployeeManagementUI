import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveStatus } from '../models/leavestatus.model';
import { RequestLeave } from '../models/requestleave.model';

@Injectable({
  providedIn: 'root'
})
export class LeavestatusService {
  constructor(private http:HttpClient) { }
  getAll():Observable<LeaveStatus[]>{
    return this.http.get<LeaveStatus[]>('https://localhost:44358/api/LeaveStatus');

  }
  addStatus(request:LeaveStatus):Observable<LeaveStatus>
  {
    return this.http.post<LeaveStatus>('https://localhost:44358/api/LeaveStatus',request);
  }
  getStatus(id:string):Observable<LeaveStatus>
  {
    return this.http.get<LeaveStatus>('https://localhost:44358/api/LeaveStatus/'+id);
    
  }
  updateStatus(id:number,request:LeaveStatus):Observable<LeaveStatus>{
    return this.http.put<LeaveStatus>('https://localhost:44358/api/LeaveStatus?id='+id,request)
  }

  deleteStatus(id:number):Observable<LeaveStatus>
  {
   return this.http.delete<LeaveStatus>('https://localhost:44358/api/LeaveStatus/'+id);
  }
}
