import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveStatus } from 'src/app/models/leavestatus.model';
import { LeavestatusService } from 'src/app/services/leavestatus.service';

@Component({
  selector: 'app-getstatus',
  templateUrl: './getstatus.component.html',
  styleUrls: ['./getstatus.component.css']
})
export class GetstatusComponent implements OnInit {
  LeaveStatus:LeaveStatus[]=[];
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
      },
      error:(response)=>{
        console.log(response);
      }
    })
    
  }
  }
