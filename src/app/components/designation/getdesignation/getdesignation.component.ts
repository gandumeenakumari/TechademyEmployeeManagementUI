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
  sortBy: string;
  searchText: string;
  designation:Designation={
    designationID:0,
    designationName:'',
    roleName:'',
    departmentName:''
  }
  constructor(private route:ActivatedRoute,private designationservice:DesignationService,private router:Router)
   { this.searchText = '';
   this.sortBy = '';}


  ngOnInit(): void {
 
    this.designationservice.getAllDesignations()
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
  

}

