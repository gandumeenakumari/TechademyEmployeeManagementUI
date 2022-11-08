import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLeave } from 'src/app/models/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-updateleave',
  templateUrl: './updateleave.component.html',
  styleUrls: ['./updateleave.component.css']
})
export class UpdateleaveComponent implements OnInit {
  requestleave:RequestLeave={
    leaveID:0,
    employeeID:0,
    leaveType:'',
    when:new Date(),
    leaveReason:'',
    leaveStatus:''
  
  }
  constructor(private route:ActivatedRoute,private requestleaveservice:RequestleaveService,private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const leaveID =params.get('leaveID');
        if(leaveID)
        {
          this.requestleaveservice.getLeave(leaveID)
          .subscribe({
            next:(response)=>
            {
              this.requestleave=response;
            }
          });
        }
        
      }
    });
  }
  updateLeave(){
    this.requestleaveservice.updateLeave(this.requestleave.leaveID,this.requestleave)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['/getallleaves']);
      }});
    }
    deleteLeave(leaveID:number){
      this.requestleaveservice.deleteLeave(leaveID)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/getallleaves']);
        }
      });
  }

}
