import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveStatus } from 'src/app/models/leavestatus.model';
import { LeavestatusService } from 'src/app/services/leavestatus.service';

@Component({
  selector: 'app-addstatus',
  templateUrl: './addstatus.component.html',
  styleUrls: ['./addstatus.component.css']
})
export class AddstatusComponent implements OnInit {
  request:LeaveStatus={
    id:0,
    status:''
  }
  
  constructor(private route:ActivatedRoute,private leavestatusservice:LeavestatusService,private router:Router) { }

  ngOnInit(): void {
  }
  addStatus()
  {
   
    this.leavestatusservice.addStatus(this.request)
    .subscribe({
      next:(LeaveStatus)=>{
        console.log(LeaveStatus);
        this.router.navigate(['/getstatus']);
        
      }
    })
  }

}
