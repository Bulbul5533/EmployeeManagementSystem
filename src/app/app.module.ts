import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EMSHomeComponent } from './EMS_Admin/ems-home/ems-home.component';
import { EMSDashboardComponent } from './EMS_Admin/ems-dashboard/ems-dashboard.component';
import { EMSCommonLoginComponent } from './emscommon-login/emscommon-login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MyEmployeeComponent } from './EMS_Employee/my-employee/my-employee.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { EMSDepartmentsComponent } from './EMS_Admin/ems-departments/ems-departments.component';
import { EmsAllEmpinfoComponent } from './EMS_Admin/ems-all-empinfo/ems-all-empinfo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EMSFilterComponent } from './EMS_Admin/ems-filter/ems-filter.component';
import { EMSDialogComponent } from './EMS_Admin/ems-dialog/ems-dialog.component';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { EmsAttendanceComponent } from './EMS_Admin/ems-attendance/ems-attendance.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './EMS_Employee/bottom-sheet/bottom-sheet.component';
import { TimeSheetComponent } from './EMS_Employee/time-sheet/time-sheet.component';
import { EmsNewEmpFormComponent } from './EMS_Admin/ems-new-emp-form/ems-new-emp-form.component';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    EMSHomeComponent,
    EMSDashboardComponent,
    EMSCommonLoginComponent,
    MyEmployeeComponent,
    EMSDepartmentsComponent,
    EmsAllEmpinfoComponent,
    EMSFilterComponent,
    EMSDialogComponent,
    EmsAttendanceComponent,
    BottomSheetComponent,
    TimeSheetComponent,
    EmsNewEmpFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    DatePipe,
    MatBottomSheetModule,
    MatRadioModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
