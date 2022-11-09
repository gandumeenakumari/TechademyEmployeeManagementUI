import { Component, OnInit } from '@angular/core';
import { PaymentRules } from 'src/app/models/paymentrules.model';
import { PaymentrulesService } from 'src/app/services/paymentrules.service';

@Component({
  selector: 'app-paymentrules',
  templateUrl: './paymentrules.component.html',
  styleUrls: ['./paymentrules.component.css']
})
export class PaymentrulesComponent implements OnInit {

  PaymentRulesDetails : PaymentRules[] =[];
  constructor(private paymentrulesdetails : PaymentrulesService) { }

  ngOnInit(): void {
    this.paymentrulesdetails.getAllPaymentRules()
    .subscribe({
      next : (PaymentRulesDetails) =>
      {
        this.PaymentRulesDetails = PaymentRulesDetails;
      },
      error : (response) =>
      {
        console.log(response);
      }
    })
  }
}
