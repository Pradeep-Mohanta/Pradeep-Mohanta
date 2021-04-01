import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { DesignationComponent } from './payroll/designation/designation.component';
import { DepartmentComponent } from './payroll/department/department.component';
import { EmployeeComponent } from './payroll/employee/employee.component';
const routes: Routes = [
  {path: '',redirectTo:'/user/login',pathMatch:'full'},
  {path: 'user',component: UserComponent,
    children: [
      {path: 'registration',component:RegistrationComponent},
      {path: 'login',component:LoginComponent}
      ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'payroll/designation',component:DesignationComponent},
  {path: 'payroll/department',component:DepartmentComponent},
  {path: 'payroll/employee',component:EmployeeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
