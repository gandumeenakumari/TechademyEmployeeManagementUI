import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  request:Designation={
    designationID:0,
    designationName:'',
    roleName:'',
    departmentName:''
  }
  constructor(private route:ActivatedRoute,private designationservice:DesignationService,private router:Router) { }

  ngOnInit(): void {
  }
addDesignation()
{
  console.log("Add employee method triggered");
  this.designationservice.addDesignation(this.request)
  .subscribe({
    next:(Designation)=>{
      console.log(Designation);
      this.router.navigate(['/getdesignation']);
      
    }
  })
}
}
