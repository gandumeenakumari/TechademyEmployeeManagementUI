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
    id:0,
    leaveType:'',
    when:new Date(),
    leaveReason:'',

  
  }
  constructor(private route:ActivatedRoute,private requestleaveservice:RequestleaveService,private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const id =params.get('id');
        if(id)
        {
          this.requestleaveservice.getLeave(id)
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
    this.requestleaveservice.updateLeave(this.requestleave.id,this.requestleave)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['/getallleaves']);
      }});
    }
    deleteLeave(id:number){
      this.requestleaveservice.deleteLeave(id)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/getallleaves']);
        }
      });
  }

}
