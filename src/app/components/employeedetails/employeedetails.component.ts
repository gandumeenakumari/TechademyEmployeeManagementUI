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
searchText:any;
title='pagination';

POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tablesize:any=[5,10,15,20]
  constructor(private employeedetailsservice:EmployeedetailsService) { }

  ngOnInit(): void {
  
 this.getAllEmployees()
  
  }
  getAllEmployees():void{
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
onTableDataChange(event:any)
{
  this.page=event;
  this.getAllEmployees();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllEmployees();
}
}

 
