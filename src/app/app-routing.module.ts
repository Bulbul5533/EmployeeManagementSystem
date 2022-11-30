import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMSCommonLoginComponent } from './emscommon-login/emscommon-login.component';
import { EMSHomeComponent } from './EMS_Admin/ems-home/ems-home.component';
import { MyEmployeeComponent } from './EMS_Employee/my-employee/my-employee.component';

const routes: Routes = [
  { path: '', component: EMSCommonLoginComponent },
  { path: 'Home', component: EMSCommonLoginComponent },
  { path: 'AdHome', component: EMSHomeComponent },
  { path: 'EmpHome/:Empid', component: MyEmployeeComponent }
  // {
  //   path: '',
  //   component: EMSCommonLoginComponent,
  //   children: [
  //     {
  //       path: 'AdHome',
  //       component: EMSHomeComponent
  //     },
  //     {
  //       path: 'EmpHome/:id',
  //       component: MyEmployeeComponent
  //     }

  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
