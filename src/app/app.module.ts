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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataComponent } from './components/paymentrules/data/data/data.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddstatusComponent } from './components/leavestatus/addstatus/addstatus/addstatus.component';
import { UpdatestatusComponent } from './components/leavestatus/updatestatus/updatestatus/updatestatus.component';
import { GetstatusComponent } from './components/leavestatus/getstatus/getstatus/getstatus.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DisplayComponent } from './components/display/display.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { PaymentrulesComponent } from './components/paymentrules/paymentrules/paymentrules.component';
import { AddpaymentrulesComponent } from './components/paymentrules/addpaymentrules/addpaymentrules/addpaymentrules.component';
import { UpdatepaymentrulesComponent } from './components/paymentrules/updatepaymentrules/updatepaymentrules/updatepaymentrules.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { AboutComponent } from './components/about/about/about.component';
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
    DataComponent,
    HeaderComponent,
    SidenavComponent,
    AddstatusComponent,
    UpdatestatusComponent,
    GetstatusComponent,
    DisplayComponent,
    FooterComponent,
    PaymentrulesComponent,
    AddpaymentrulesComponent,
    UpdatepaymentrulesComponent,
    ContactComponent,
    AboutComponent,


    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,


    
    
  

  ],
  providers: [
    AuthService,HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
