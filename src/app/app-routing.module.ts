import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdesignationComponent } from './components/designation/getdesignation/getdesignation.component';
import { UpdatedesignationComponent } from './components/designation/updatedesignation/updatedesignation.component';
import { DeleteemployeeComponent } from './components/employee/deleteemployee/deleteemployee.component';
import { GetemployeebyidComponent } from './components/employee/getemployeebyid/getemployeebyid.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import{AddemployeeComponent} from './components/addemployee/addemployee.component'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { UpdateemployeeComponent } from './components/employee/updateemployee/updateemployee.component';
import { DesignationComponent } from './components/designation/designation.component';
import { DeletedesignationComponent } from './components/designation/deletedesignation/deletedesignation.component';
import { AddworkinghoursComponent } from './components/workinghours/addworkinghours/addworkinghours.component';
import { GetallworkinghoursComponent } from './components/workinghours/getallworkinghours/getallworkinghours.component';
import { UpdateworkinghoursComponent } from './components/workinghours/updateworkinghours/updateworkinghours.component';
import { DeleteworkinghoursComponent } from './components/workinghours/deleteworkinghours/deleteworkinghours.component';
import { AddleaveComponent } from './components/requestleave/addleave/addleave/addleave.component';
import { UpdateleaveComponent } from './components/requestleave/updateleave/updateleave/updateleave.component';
import { DeleteleaveComponent } from './components/requestleave/deleteleave/deleteleave/deleteleave.component';
import { GetallleavesComponent } from './components/requestleave/getallleave/getallleaves/getallleaves.component';
import { DataComponent } from './components/paymentrules/data/data/data.component';
import { GetstatusComponent } from './components/leavestatus/getstatus/getstatus/getstatus.component';
import { UpdatestatusComponent } from './components/leavestatus/updatestatus/updatestatus/updatestatus.component';
import { AddstatusComponent } from './components/leavestatus/addstatus/addstatus/addstatus.component';
import { DisplayComponent } from './components/display/display.component';
import { HeaderComponent } from './components/header/header.component';
import { PaymentrulesComponent } from './components/paymentrules/paymentrules/paymentrules.component';
import { UpdatepaymentrulesComponent } from './components/paymentrules/updatepaymentrules/updatepaymentrules/updatepaymentrules.component';
import { AddpaymentrulesComponent } from './components/paymentrules/addpaymentrules/addpaymentrules/addpaymentrules.component';
const routes: Routes = [
  
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : "register",
      component : RegisterComponent
    },
    {
      path:'',
      component:HeaderComponent,
      
    },
    {
      path:'display',
      component:DisplayComponent
    },
    {
      path:'header',
      component:HeaderComponent
    },
    {
      path:'designation',
      component:DesignationComponent
    },
    {
      path:'getdesignation',
      component:GetdesignationComponent
    },
    {
      path:'getstatus',
      component:GetstatusComponent
    },
    {
      path: 'home',
      component : HomeComponent,
      canActivate : [AuthGuard]
    },
    {
      path:'employeedetails',
      component:EmployeedetailsComponent
    },
    {
      path:'getallleaves',
      component:GetallleavesComponent
    },
    {
      path:'paymentrules',
      component:PaymentrulesComponent
    },
    {
      path:'getallworkinghours',
      component:GetallworkinghoursComponent
    },
    {
      path:'data',
      component:DataComponent
    },
    {
      path:'getemployeebyid',
      component:GetemployeebyidComponent
    },

    {
      path:'employeedetails/:employeeID',
      component:UpdateemployeeComponent
    },
    {
      path:'getallworkinghours/:id',
      component:UpdateworkinghoursComponent
    },
    {
      path:'paymentrules/:id',
      component:UpdatepaymentrulesComponent
    },
    {
      path:'getstatus/:id',
      component:UpdatestatusComponent
    },
    {
      path:'getallworkinghours/:id',
      component:DeleteworkinghoursComponent
    },
    {
      path:'employeedetails/:employeeID',
      component:DeleteemployeeComponent
    },
    {
      path:'getdesignation/:designationID',
      component:UpdatedesignationComponent
    },
    {
      path:'getallleaves/:id',
      component:UpdateleaveComponent
    },
    {
      path:'getallleaves/:id',
      component:DeleteleaveComponent
    },
    {
      path:'addemployee',
      component:AddemployeeComponent
    },
    {
      path:'addleave',
      component:AddleaveComponent
    },
    {
      path:'addpaymentrules',
      component:AddpaymentrulesComponent
    },
    {
      path:'addworkinghours',
      component:AddworkinghoursComponent
    },
    {
      path:'addstatus',
      component:AddstatusComponent
    },
    {
      path:'updatepaymentrules',
      component:UpdatepaymentrulesComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
