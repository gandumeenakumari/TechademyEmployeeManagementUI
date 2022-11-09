import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/emp.model';
import { EmployeedetailsService } from 'src/app/services/employeedetails.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  request:Employee={
    employeeID:0,
    employeeName:'',
    gender:'',
    mobileNumber:'',
    address:'',
    email:'',
    designationID:0,
    memberSince:new Date()
  }
  constructor(private route:ActivatedRoute,private router:Router,private employeeservice:EmployeedetailsService) { }

  ngOnInit(): void {
  }
addNewEmployee()
{
  console.log("Add employee method triggered");
  this.employeeservice.addNewEmployee(this.request)
  .subscribe({
    next:(Employee)=>
    {
      this.router.navigate(['employeedetails']);
      
      
    }
  })
}
}
