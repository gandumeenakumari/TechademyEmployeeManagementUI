import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentRules } from '../models/paymentrules.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentrulesService {

  constructor(private http:HttpClient) {}
  getAllPaymentRules():Observable<PaymentRules[]>{
    return this.http.get<PaymentRules[]>('https://localhost:44358/api/PaymentRules');
  }
  addPaymentRules(addPaymentRulesRequest:PaymentRules) : Observable<PaymentRules>
  {
    return this.http.post<PaymentRules>('https://localhost:44358/api/PaymentRules',addPaymentRulesRequest);
  }
  getPaymentRules(id:string):Observable<PaymentRules>
  {
    return this.http.get<PaymentRules>('https://localhost:44358/api/PaymentRules/'+id);
  }
  updatePaymentRules(id:number,updatePaymentRulesRequest:PaymentRules):Observable<PaymentRules>{
    return this.http.put<PaymentRules>('https://localhost:44358/api/PaymentRules/'+id,updatePaymentRulesRequest)
  }
  deletePaymentRules(id:number):Observable<PaymentRules>
  {
   return this.http.delete<PaymentRules>('https://localhost:44358/api/PaymentRules/'+id);
  }
}
