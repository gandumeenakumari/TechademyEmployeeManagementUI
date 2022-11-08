import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-getdesignation',
  templateUrl: './getdesignation.component.html',
  styleUrls: ['./getdesignation.component.css']
})
export class GetdesignationComponent implements OnInit {

  Designation:Designation[]=[];
  constructor(private designationservice:DesignationService) { }


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
