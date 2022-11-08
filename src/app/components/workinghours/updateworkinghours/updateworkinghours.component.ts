import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identity } from 'rxjs';
import { Workinghours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-updateworkinghours',
  templateUrl: './updateworkinghours.component.html',
  styleUrls: ['./updateworkinghours.component.css']
})
export class UpdateworkinghoursComponent implements OnInit {
workinghours:Workinghours={
  id:0,
  employeeID:0,
  companyWokingHours:0,
  employeeWorkingHours:0
}

  constructor(private route:ActivatedRoute,private router:Router,private workinghoursservice:WorkinghoursService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const id =params.get('id');
        if(id)
        {
          this.workinghoursservice.getWorkingHour(id)
          .subscribe({
            next:(response)=>
            {
              this.workinghours =response;
              console.log("hello");
            }
          });
        }
        
      }
    });

  }
  UpdateWorkingHours(){
    this.workinghoursservice.updateWorkingHours(this.workinghours.id,this.workinghours)
    .subscribe({
      next:(response) =>{
        console.log(response);
        console.log("nothing");
        this.router.navigate(['/getallworkinghours']);
      }});
    }
    DeleteWorkingHours(id:number){
      this.workinghoursservice.deleteWorkingHours(id)
      .subscribe({
        next:(response) =>{
          console.log(response);
          this.router.navigate(['/getallworkinghours']);
        }
      });
  }


}
