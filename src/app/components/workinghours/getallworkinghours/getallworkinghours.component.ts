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
  searchText:any;
title='pagination';

POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tablesize:any=[5,10,15,20]
  constructor(private workinghourservice:WorkinghoursService) { }

  ngOnInit(): void {
    this.getToalWorkingHours()
  }
  getToalWorkingHours():void{
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
}onTableDataChange(event:any)
{
  this.page=event;
  this.getToalWorkingHours();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getToalWorkingHours();
}

  }


