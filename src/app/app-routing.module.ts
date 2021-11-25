import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guard/auth.guard';

import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { EmployeeResolver } from './employee/shared/resolver/employee.resolver';
import { AddEmployeeComponent } from './employer/components/add-employee/add-employee.component';
import { EmployerListComponent } from './employer/components/employer-list/employer-list.component';
import { EmployerResolver } from './employer/shared/resolver/employer.resolver';
import { LoginComponent } from './user-management/components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }, 
  {
    path: "employer-list",
    component: EmployerListComponent,

    canActivate: [AuthGuard],
    resolve: {
      employers: EmployerResolver
    }
  },
  {
    path: "employee-list",
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    resolve: {
      employees: EmployeeResolver
    }
  },
  {
    path: "add-employee",
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
