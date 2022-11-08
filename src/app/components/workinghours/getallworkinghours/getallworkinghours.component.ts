import { Component, OnInit } from '@angular/core';
import { Workinghours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-getallworkinghours',
  templateUrl: './getallworkinghours.component.html',
  styleUrls: ['./getallworkinghours.component.css']
})
export class GetallworkinghoursComponent implements OnInit {

  Workinghours:Workinghours[]=[];
  constructor(private workinghourservice:WorkinghoursService) { }

  ngOnInit(): void {
    this.workinghourservice.getToalWorkingHours()
  .subscribe({
    next:(Workinghours)=>{
      
      this.Workinghours=Workinghours;
      console.log(this.Workinghours);
    },
    error:(response: any)=>{
      console.log(response);
    }
  })
  }
  }


