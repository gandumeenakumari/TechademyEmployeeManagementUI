import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRules } from 'src/app/models/paymentrules.model';
import { PaymentrulesService } from 'src/app/services/paymentrules.service';

@Component({
  selector: 'app-addpaymentrules',
  templateUrl: './addpaymentrules.component.html',
  styleUrls: ['./addpaymentrules.component.css']
})
export class AddpaymentrulesComponent implements OnInit {

  paymentRules:PaymentRules={
    paymentID: 0,
    paymentRule: ''
  };
  constructor(private route:ActivatedRoute,private paymentservice:PaymentrulesService,private router:Router) {
   }
  ngOnInit(): void {
  }
  addPaymentRules()
  {
    console.log("Add Payment Rules method triggred");

    this.paymentservice.addPaymentRules(this.paymentRules)
    .subscribe({
      next:(Rules) =>{
        
        console.log(Rules);
        this.router.navigate(['/paymentrules']);
      }
    });

}
}
