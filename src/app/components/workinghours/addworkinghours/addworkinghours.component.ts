import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workinghours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-addworkinghours',
  templateUrl: './addworkinghours.component.html',
  styleUrls: ['./addworkinghours.component.css']
})
export class AddworkinghoursComponent implements OnInit {

  request:Workinghours={
    id:0,
    employeeID:0,
    companyWokingHours:0,
    employeeWorkingHours:0
  }
  constructor(private route:ActivatedRoute,private router:Router,private workinghoursservice:WorkinghoursService) { }

  ngOnInit(): void {  
  }
  AddWorkingHours()
  {
  this.workinghoursservice.addWorkingHours(this.request)
  .subscribe({
    next:(Workinghours)=>{
      //console.log(Workinghours);
      this.router.navigate(['/getallworkinghours']);
      
    }
  })
}

}
