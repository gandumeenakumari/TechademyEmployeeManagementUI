import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveStatus } from 'src/app/models/leavestatus.model';
import { LeavestatusService } from 'src/app/services/leavestatus.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
  LeaveStatus:LeaveStatus[]=[
  ]
  a:any
  leaveStatus:LeaveStatus={
    id:0,
    status:''
  
  }

  constructor(private route:ActivatedRoute,private leavestatusservice:LeavestatusService,private router:Router) { }

  ngOnInit(): void {
    this.leavestatusservice.getAll()
    .subscribe({
      next:(LeaveStatus)=>
      {
        this.LeaveStatus=LeaveStatus;
        console.log(this.LeaveStatus);
      },
      error:(response)=>{
        console.log(response);
      }
    })
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const id =params.get('id');
        if(id)
        {
          this.leavestatusservice.getStatus(id)
          .subscribe({
            next:(response)=>
            {
              this.leaveStatus=response;
            }
          });
        }
        
      }
    });
  }
  updateStatus(){
    this.leavestatusservice.updateStatus(this.leaveStatus.id,this.leaveStatus)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['/getstatus']);
      }});
    }
    deleteStatus(id:number){
      this.leavestatusservice.deleteStatus(id)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/getstatus']);
        }
      });
  }

}
