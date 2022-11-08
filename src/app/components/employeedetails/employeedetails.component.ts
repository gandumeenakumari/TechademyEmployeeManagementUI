import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/models/employeedetails.model';
import { EmployeedetailsService } from 'src/app/services/employeedetails.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
EmployeeDetails:EmployeeDetails[]=[];
  constructor(private employeedetailsservice:EmployeedetailsService) { }

  ngOnInit(): void {
  
  this.employeedetailsservice.getAllEmployees()
  .subscribe({
    next:(EmployeeDetails)=>{
      this.EmployeeDetails=EmployeeDetails;
    },
    error:(response)=>{
      console.log(response);
    }
  })
  }
}
