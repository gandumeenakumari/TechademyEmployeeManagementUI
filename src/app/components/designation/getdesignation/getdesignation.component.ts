import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-getdesignation',
  templateUrl: './getdesignation.component.html',
  styleUrls: ['./getdesignation.component.css']
})
export class GetdesignationComponent implements OnInit {

  Designation:Designation[]=[];
  searchText:any;
title='pagination';

POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tablesize:any=[5,10,15,20]
  designation:Designation={
    designationID:0,
    designationName:'',
    roleName:'',
    departmentName:''
  }
  constructor(private route:ActivatedRoute,private designationservice:DesignationService,private router:Router)
   {}


  ngOnInit(): void {
    this.getAllDesignations() 
  }
  getAllDesignations():void
{ this.designationservice.getAllDesignations()
  .subscribe({
    next:(Designation)=>
    {
      this.Designation=Designation;
    },
    error:(response)=>{
      console.log(response);
    }
  })
} 
onTableDataChange(event:any)
{
  this.page=event;
  this.getAllDesignations();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllDesignations();
}

}

