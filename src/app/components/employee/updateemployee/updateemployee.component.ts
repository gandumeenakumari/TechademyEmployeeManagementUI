import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/emp.model';
import { EmployeedetailsService } from 'src/app/services/employeedetails.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  employeeDetails:Employee={
    employeeID:0,
    employeeName:'',
    gender:'',
    mobileNumber:'',
    address:'',
    email:'',
    designationID:0,
    memberSince:new Date()
  }
  constructor(private route:ActivatedRoute,private employeeservice:EmployeedetailsService,private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const employeeID=params.get('employeeID');
        if(employeeID)
        {
          this.employeeservice.getEmployeeByID(employeeID)
          .subscribe({
            next:(response)=>
            {
              this.employeeDetails=response;
            }
          });
        }
        
      }
    });

    }
    updateEmployee(){
      this.employeeservice.updateEmployee(this.employeeDetails.employeeID,this.employeeDetails)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/employeedetails']);
        }});
      }
      deleteEmployee(employeeID:number){
        this.employeeservice.deleteEmployee(employeeID)
        .subscribe({
          next:(response) =>{
            this.router.navigate(['/employeedetails']);
          }
        });
    }
}
