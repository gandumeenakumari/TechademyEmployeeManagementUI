import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLeave } from 'src/app/models/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-getallleaves',
  templateUrl: './getallleaves.component.html',
  styleUrls: ['./getallleaves.component.css']
})
export class GetallleavesComponent implements OnInit {
RequestLeave:RequestLeave[]=[];
requestleave:RequestLeave={
  id:0,
  leaveType:'',
  when:new Date(),
  leaveReason:''

}

  constructor(private route:ActivatedRoute,private requestleaveservice:RequestleaveService,private router:Router) { }



  ngOnInit(): void {
    this.requestleaveservice.getAllLeaves()
    .subscribe({
      next:(RequestLeave)=>
      {
        this.RequestLeave=RequestLeave;
      },
      error:(response)=>{
        console.log(response);
      }
    })
    
  }
  }

