import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myimage:string="assets/images/employee.jpg";
  title="Employee Management"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
