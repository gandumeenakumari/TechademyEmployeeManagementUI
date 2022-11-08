import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.css']
})
export class UpdatedesignationComponent implements OnInit {

  designation:Designation={
    designationID:0,
    designationName:'',
    roleName:'',
    departmentName:''
  }
  constructor(private route:ActivatedRoute,private designationservice:DesignationService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const designationID =params.get('designationID');
        if(designationID)
        {
          this.designationservice.getDesignation(designationID)
          .subscribe({
            next:(response)=>
            {
              this.designation=response;
            }
          });
        }
        
      }
    });

  }


  updateDesignation(){
    this.designationservice.updateDesignation(this.designation.designationID,this.designation)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['/getdesignation']);
      }});
    }
    deleteDesignation(designationID:number){
      this.designationservice.deleteDesignation(designationID)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/getdesignation']);
        }
      });
  }
}


