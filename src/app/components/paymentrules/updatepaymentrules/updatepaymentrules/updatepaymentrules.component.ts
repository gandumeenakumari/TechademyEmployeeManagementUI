import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRules } from 'src/app/models/paymentrules.model';
import { PaymentrulesService } from 'src/app/services/paymentrules.service';

@Component({
  selector: 'app-updatepaymentrules',
  templateUrl: './updatepaymentrules.component.html',
  styleUrls: ['./updatepaymentrules.component.css']
})
export class UpdatepaymentrulesComponent implements OnInit {
  paymentrules:PaymentRules={
    paymentID: 0,
    paymentRule: ''
  }
  constructor(private route:ActivatedRoute,private paymentservice:PaymentrulesService,private router:Router) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>
      {
        const id=params.get('id');
        if(id)
        {
          this.paymentservice.getPaymentRules(id)
          .subscribe({
            next:(response) =>{

              console.log(id);
              console.log(this.paymentrules);
              this.paymentrules=response;
              console.log(this.paymentrules);

            }
          });
        }
      }
    });
  }
  updatePaymentRules(){
    this.paymentservice.updatePaymentRules(this.paymentrules.paymentID,this.paymentrules)
    .subscribe({
      next:(response) =>{
        console.log(this.paymentrules);
        this.router.navigate(['/paymentrules']);
      }});
  }
  deletePaymentRules(id:number){
    this.paymentservice.deletePaymentRules(id)
    .subscribe({
      next:(response) =>{
        console.log(id);
        this.router.navigate(['/paymentrules']);
      }
    });
  }

}
