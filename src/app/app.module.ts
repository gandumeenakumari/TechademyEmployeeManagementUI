import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { DesignationComponent } from './components/designation/designation.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { UpdateemployeeComponent } from './components/employee/updateemployee/updateemployee.component';
import { UpdatedesignationComponent } from './components/designation/updatedesignation/updatedesignation.component';
import { DeletedesignationComponent } from './components/designation/deletedesignation/deletedesignation.component';
import { GetdesignationComponent } from './components/designation/getdesignation/getdesignation.component';
import { GetemployeebyidComponent } from './components/employee/getemployeebyid/getemployeebyid.component';
import { DeleteemployeeComponent } from './components/employee/deleteemployee/deleteemployee.component';
import { GetallworkinghoursComponent } from './components/workinghours/getallworkinghours/getallworkinghours.component';
import { UpdateworkinghoursComponent } from './components/workinghours/updateworkinghours/updateworkinghours.component';
import { AddworkinghoursComponent } from './components/workinghours/addworkinghours/addworkinghours.component';
import { DeleteworkinghoursComponent } from './components/workinghours/deleteworkinghours/deleteworkinghours.component';
import { AddleaveComponent } from './components/requestleave/addleave/addleave/addleave.component';
import { UpdateleaveComponent } from './components/requestleave/updateleave/updateleave/updateleave.component';
import { DeleteleaveComponent } from './components/requestleave/deleteleave/deleteleave/deleteleave.component';
import { GetallleavesComponent } from './components/requestleave/getallleave/getallleaves/getallleaves.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EmployeedetailsComponent,
    DesignationComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    UpdatedesignationComponent,
    DeletedesignationComponent,
    GetdesignationComponent,
    GetemployeebyidComponent,
    DeleteemployeeComponent,
    GetallworkinghoursComponent,
    UpdateworkinghoursComponent,
    AddworkinghoursComponent,
    DeleteworkinghoursComponent,
    AddleaveComponent,
    UpdateleaveComponent,
    DeleteleaveComponent,
    GetallleavesComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
  

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
