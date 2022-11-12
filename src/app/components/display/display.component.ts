import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
user:any=this.authservice.loadCurrentUser();
  constructor(private router:Router,private authservice:AuthService) { }
data:any;
  ngOnInit(): void {
  }
  logout()
  {
    this.authservice.removeToken();
    this.router.navigateByUrl("/login");
  }

}
