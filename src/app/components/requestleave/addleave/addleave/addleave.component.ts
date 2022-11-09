import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLeave } from 'src/app/models/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {

  request:RequestLeave={
    id:0,
    leaveType:'',
    when:new Date(),
    leaveReason:'',
  
  }
  constructor(private route:ActivatedRoute,private requstleaveservice:RequestleaveService,private router:Router) { }


  ngOnInit(): void {
  }
  addLeave()
{
 
  this.requstleaveservice.addLeave(this.request)
  .subscribe({
    next:(RequestLeave)=>{
      console.log(RequestLeave);
      this.router.navigate(['/getallleaves']);
      
    }
  })
}

}
