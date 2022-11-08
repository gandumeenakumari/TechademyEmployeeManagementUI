import { NgModule } from '@angular/core';
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
      path : '',
      redirectTo : 'login',
      pathMatch : 'full'
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
      path: 'home',
      component : HomeComponent,
      canActivate : [AuthGuard]
    },
    {
      path:'employeedetails',
      component:EmployeedetailsComponent
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
      path:'employeedetails/:employeeID',
      component:DeleteemployeeComponent
    },
    {
      path:'getdesignation/:designationID',
      component:UpdatedesignationComponent
    },
    {
      path:'addemployee',
      component:AddemployeeComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
